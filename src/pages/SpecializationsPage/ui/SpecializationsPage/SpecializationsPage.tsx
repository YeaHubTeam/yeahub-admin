import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { useGetSpecializationsListQuery } from '@/entities/specialization';

import { SearchSection } from '@/widgets/SearchSection';
import { SpecializationsTable } from '@/widgets/SpecializationsTable';

import { SpecializationsPagePagination } from '../SpecializationsPagePagination/SpecializationsPagePagination';

import styles from './SpecializationsPage.module.css';

/**
 * Page showing info about all the created specializations
 * @constructor
 */
const SpecializationsPage = () => {
	const { data: specialization } = useGetSpecializationsListQuery();

	return (
		<Flex componentType="main" direction="column" gap="24">
			<SearchSection to="create" />
			<Card className={styles.content}>
				<SpecializationsTable specializations={specialization} />
				<SpecializationsPagePagination specialization={specialization} />
			</Card>
		</Flex>
	);
};

export default SpecializationsPage;
