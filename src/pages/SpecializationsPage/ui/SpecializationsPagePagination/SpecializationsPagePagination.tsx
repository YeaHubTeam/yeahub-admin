import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Pagination } from '@/shared/ui/Pagination';

import { Specialization } from '@/entities/specialization';

import { getSpecializationsPageNum } from '../../model/selectors/specializationsPageSelectors';
import { specializationsPageActions } from '../../model/slices/specializationsPageSlice';

interface SpecializationsPagePaginationProps {
	specialization?: Specialization[];
}

const SPECIALIZATIONS_LIST_LIMIT = 10;

export const SpecializationsPagePagination = ({
	specialization,
}: SpecializationsPagePaginationProps) => {
	const dispatch = useAppDispatch();
	const page = useSelector(getSpecializationsPageNum);

	const onPrevPageClick = () => {
		dispatch(specializationsPageActions.setPage(page - 1));
	};

	const onNextPageClick = () => {
		dispatch(specializationsPageActions.setPage(page + 1));
	};

	const onChangePage = (newPage: number) => {
		dispatch(specializationsPageActions.setPage(newPage));
	};

	if (!specialization) {
		return null;
	}

	return (
		<Pagination
			onPrevPageClick={onPrevPageClick}
			onNextPageClick={onNextPageClick}
			onChangePage={onChangePage}
			page={page}
			totalPages={Math.ceil(specialization.length / SPECIALIZATIONS_LIST_LIMIT)}
		/>
	);
};
