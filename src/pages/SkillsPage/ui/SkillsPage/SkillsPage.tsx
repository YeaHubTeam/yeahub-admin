import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { useGetSkillsListQuery } from '@/entities/skill';

import { SearchSection } from '@/widgets/SearchSection';
import { SkillsTable } from '@/widgets/SkillsTable';

import { SkillsPagePagination } from '../SkillsPagePagination/SkillsPagePagination';

import styles from './SkillsPage.module.css';

/**
 * Page showing info about all the created skills
 * @constructor
 */
const SkillsPage = () => {
	const { data: skills } = useGetSkillsListQuery();

	return (
		<Flex componentType="main" direction="column" gap="24">
			<SearchSection to="create" />
			<Card className={styles.content}>
				<SkillsTable skills={skills?.data} />
				<SkillsPagePagination skills={skills?.data} />
			</Card>
		</Flex>
	);
};

export default SkillsPage;
