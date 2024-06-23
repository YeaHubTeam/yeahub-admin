import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { useGetSkillsListQuery } from '@/entities/skill';

import { SearchSection } from '@/widgets/SearchSection';
import { SkillsTable } from '@/widgets/SkillsTable';

import { getSelectedSkills, getSkillsPageNum } from '../../model/selectors/skillsPageSelectors';
import { skillsPageActions } from '../../model/slices/skillsPageSlice';
import { SkillsPagePagination } from '../SkillsPagePagination/SkillsPagePagination';

import styles from './SkillsPage.module.css';

/**
 * Page showing info about all the created skills
 * @constructor
 */
const SkillsPage = () => {
	const dispatch = useAppDispatch();
	const page = useSelector(getSkillsPageNum);
	const selectedSkills = useSelector(getSelectedSkills);

	const { data: skills } = useGetSkillsListQuery({ page });

	const onSelectSkills = (ids: string[]) => {
		dispatch(skillsPageActions.setSelectedSkills(ids));
	};

	//TODO make a searchTerm based API call to search for skills across all data due to paging
	const [searchTerm, setSearchTerm] = useState('');
	const sortedSkills = useMemo(() => {
		if (!skills) return skills;

		const data = (skills?.data || []).filter((skill) =>
			skill.title.toLowerCase().includes(searchTerm.toLowerCase()),
		);

		return {
			data,
			total: data.length,
			page: skills.page,
			limit: skills.limit,
		};
	}, [skills, searchTerm]);

	//TODO implement removing selected questions
	const onRemoveSkills = () => {};

	return (
		<Flex componentType="main" direction="column" gap="24">
			<SearchSection
				to="create"
				showRemoveButton={selectedSkills.length > 0}
				onRemove={onRemoveSkills}
				onSearch={setSearchTerm}
			/>
			<Card className={styles.content}>
				<SkillsTable
					skills={sortedSkills?.data}
					selectedSkills={selectedSkills}
					onSelectSkills={onSelectSkills}
				/>
				<SkillsPagePagination skillsResponse={sortedSkills} />
			</Card>
		</Flex>
	);
};

export default SkillsPage;
