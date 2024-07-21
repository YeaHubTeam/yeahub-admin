import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { useGetSpecializationsListQuery } from '@/entities/specialization';

import { SearchSection } from '@/widgets/SearchSection';
import { SpecializationsTable } from '@/widgets/SpecializationsTable';

import { specializationsPageActions } from '@/pages/SpecializationsPage/model/slices/specializationsPageSlice';

import {
	getSelectedSpecializations,
	getSpecializationsPageNum,
} from '../../model/selectors/specializationsPageSelectors';
import { SpecializationsPagePagination } from '../SpecializationsPagePagination/SpecializationsPagePagination';

import styles from './SpecializationsPage.module.css';

/**
 * Page showing info about all the created specializations
 * @constructor
 */
const SpecializationsPage = () => {
	const dispatch = useAppDispatch();
	const page = useSelector(getSpecializationsPageNum);
	const selectedSpecializations = useSelector(getSelectedSpecializations);

	const { data: specializations } = useGetSpecializationsListQuery({ page });

	const onSelectSpecializations = (ids: string[]) => {
		dispatch(specializationsPageActions.setSelectedSpecializations(ids));
	};

	//TODO make a searchTerm based API call to search for skills across all data due to paging
	const [searchTerm, setSearchTerm] = useState('');
	const sortedSpecialization = useMemo(() => {
		if (!specializations) return specializations;

		const data = (specializations?.data || []).filter((skill) =>
			skill.title.toLowerCase().includes(searchTerm.toLowerCase()),
		);

		return {
			data,
			total: data.length,
			page: specializations.page,
			limit: specializations.limit,
		};
	}, [searchTerm, specializations]);

	//TODO implement removing selected questions
	const onRemoveSpecializations = () => {};

	return (
		<Flex componentType="main" direction="column" gap="24">
			<SearchSection
				to="create"
				showRemoveButton={selectedSpecializations.length > 0}
				onRemove={onRemoveSpecializations}
				onSearch={setSearchTerm}
			/>
			<Card className={styles.content}>
				<SpecializationsTable
					specializations={sortedSpecialization?.data}
					selectedSpecializations={selectedSpecializations}
					onSelectSpecializations={onSelectSpecializations}
				/>
				<SpecializationsPagePagination specializationsResponse={sortedSpecialization} />
			</Card>
		</Flex>
	);
};

export default SpecializationsPage;
