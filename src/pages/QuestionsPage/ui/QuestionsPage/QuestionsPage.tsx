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

	const onRemoveQuestions = () => {};

	return (
		<Flex componentType="main" direction="column" gap="24">
			<SearchSection
				to="create"
				showRemoveButton={selectedQuestions.length > 0}
				onRemove={onRemoveQuestions}
			/>
			<Card className={styles.content}>
				<QuestionsTable
					questions={questions?.data}
					selectedQuestions={selectedQuestions}
					onSelectQuestions={onSelectQuestions}
				/>
				<QuestionPagePagination questionsResponse={questions} />
			</Card>
		</Flex>
	);
};

export default QuestionsPage;
