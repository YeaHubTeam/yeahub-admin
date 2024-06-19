import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { useGetQuestionsListQuery } from '@/entities/question';

import { QuestionsTable } from '@/widgets/QuestionsTable';
import { SearchSection } from '@/widgets/SearchSection';

import {
	getQuestionsPageNum,
	getSelectedQuestions,
} from '../../model/selectors/questionsPageSelectors';
import { questionsPageActions } from '../../model/slices/questionsPageSlice';
import { QuestionPagePagination } from '../QuestionPagePagination/QuestionPagePagination';

import styles from './QuestionsPage.module.css';

/**
 * Page showing info about all the created questions
 * @constructor
 */

const QuestionsPage = () => {
	const dispatch = useAppDispatch();
	const page = useSelector(getQuestionsPageNum);
	const selectedQuestions = useSelector(getSelectedQuestions);
	const { data: questions } = useGetQuestionsListQuery({ page });

	const onSelectQuestions = (ids: string[]) => {
		dispatch(questionsPageActions.setSelectedQuestions(ids));
	};

	const [searchTerm, setSearchTerm] = useState('');
	const sortedQuestions = useMemo(() => {
		if (!questions) return questions;

		const data = (questions?.data || []).filter((question) =>
			question.title.toLowerCase().includes(searchTerm.toLowerCase()),
		);

		return {
			data,
			total: data.length,
			page: questions.page,
			limit: questions.limit,
		};
	}, [questions, searchTerm]);

	const onRemoveQuestions = () => {
		//TODO implement removing selected questions
		console.log(selectedQuestions);
	};

	return (
		<Flex componentType="main" direction="column" gap="24">
			<Card className={styles.content}>
				<SearchSection
					to="create"
					showRemoveButton={selectedQuestions.length > 0}
					onRemove={onRemoveQuestions}
					onSearch={setSearchTerm}
				/>
				<QuestionsTable
					questions={sortedQuestions?.data}
					selectedQuestions={selectedQuestions}
					onSelectQuestions={onSelectQuestions}
				/>
				<QuestionPagePagination questionsResponse={sortedQuestions} />
			</Card>
		</Flex>
	);
};

export default QuestionsPage;
