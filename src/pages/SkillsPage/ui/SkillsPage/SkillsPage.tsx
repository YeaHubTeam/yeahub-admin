import { useSelector } from 'react-redux';

import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { useGetSkillsListQuery } from '@/entities/skill';

import { SearchSection } from '@/widgets/SearchSection';
import { SkillsTable } from '@/widgets/SkillsTable';

import { getSkillsPageNum } from '../../model/selectors/skillsPageSelectors';
import { SkillsPagePagination } from '../SkillsPagePagination/SkillsPagePagination';

import styles from './SkillsPage.module.css';

/**
 * Page showing info about all the created skills
 * @constructor
 */
const SkillsPage = () => {
	const page = useSelector(getSkillsPageNum);

	const { data: skills } = useGetSkillsListQuery({ page });

	return (
		<Flex componentType="main" direction="column" gap="24">
			<SearchSection to="create" />
			<Card className={styles.content}>
				<SkillsTable skills={skills?.data} />
				<SkillsPagePagination skillsResponse={skills} />
			</Card>
		</Flex>
	);
};

export default SkillsPage;
