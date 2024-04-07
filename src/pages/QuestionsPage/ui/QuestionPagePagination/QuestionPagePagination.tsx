import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Pagination } from '@/shared/ui/Pagination';

import { Question } from '@/entities/Question';

import { getQuestionsPageNum } from '../../model/selectors/questionsPageSelectors';
import { questionsPageActions } from '../../model/slices/questionsPageSlice';

interface QuestionPagePaginationProps {
	questions?: Question[];
}

const QUESTIONS_LIST_LIMIT = 10;

export const QuestionPagePagination = ({ questions }: QuestionPagePaginationProps) => {
	const dispatch = useAppDispatch();
	const page = useSelector(getQuestionsPageNum);

	const onPrevPageClick = () => {
		dispatch(questionsPageActions.setPage(page - 1));
	};

	const onNextPageClick = () => {
		dispatch(questionsPageActions.setPage(page + 1));
	};

	const onChangePage = (newPage: number) => {
		dispatch(questionsPageActions.setPage(newPage));
	};

	if (!questions) {
		return null;
	}

	return (
		<Pagination
			onPrevPageClick={onPrevPageClick}
			onNextPageClick={onNextPageClick}
			onChangePage={onChangePage}
			page={page}
			totalPages={Math.ceil(questions.length / QUESTIONS_LIST_LIMIT)}
		/>
	);
};
