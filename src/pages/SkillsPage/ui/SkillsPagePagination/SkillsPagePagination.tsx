import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Pagination } from '@/shared/ui/Pagination';

import { Skill } from '@/entities/skill';

import { getSkillsPageNum } from '../../model/selectors/skillsPageSelectors';
import { skillsPageActions } from '../../model/slices/skillsPageSlice';

interface SkillsPagePaginationProps {
	skills?: Skill[];
}

const SKILLS_LIST_LIMIT = 10;

export const SkillsPagePagination = ({ skills }: SkillsPagePaginationProps) => {
	const dispatch = useAppDispatch();
	const page = useSelector(getSkillsPageNum);

	const onPrevPageClick = () => {
		dispatch(skillsPageActions.setPage(page - 1));
	};

	const onNextPageClick = () => {
		dispatch(skillsPageActions.setPage(page + 1));
	};

	const onChangePage = (newPage: number) => {
		dispatch(skillsPageActions.setPage(newPage));
	};

	if (!skills) {
		return null;
	}

	return (
		<Pagination
			onPrevPageClick={onPrevPageClick}
			onNextPageClick={onNextPageClick}
			onChangePage={onChangePage}
			page={page}
			totalPages={Math.ceil(skills.length / SKILLS_LIST_LIMIT)}
		/>
	);
};
