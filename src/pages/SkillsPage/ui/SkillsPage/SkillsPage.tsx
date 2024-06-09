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

	const onRemoveSkills = () => {};

	return (
		<Flex componentType="main" direction="column" gap="24">
			<SearchSection
				to="create"
				showRemoveButton={selectedSkills.length > 0}
				onRemove={onRemoveSkills}
			/>
			<Card className={styles.content}>
				<SkillsTable
					skills={skills?.data}
					selectedSkills={selectedSkills}
					onSelectSkills={onSelectSkills}
				/>
				<SkillsPagePagination skillsResponse={skills} />
			</Card>
		</Flex>
	);
};

export default SkillsPage;
