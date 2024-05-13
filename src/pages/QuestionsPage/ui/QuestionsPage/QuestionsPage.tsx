import { useSelector } from 'react-redux';

import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { useGetQuestionsListQuery } from '@/entities/question';

import { QuestionsTable } from '@/widgets/QuestionsTable';
import { SearchSection } from '@/widgets/SearchSection';

import { getQuestionsPageNum } from '../../model/selectors/questionsPageSelectors';
import { QuestionPagePagination } from '../QuestionPagePagination/QuestionPagePagination';

import styles from './QuestionsPage.module.css';

/**
 * Page showing info about all the created questions
 * @constructor
 */
const QuestionsPage = () => {
	const page = useSelector(getQuestionsPageNum);

	const { data: questions } = useGetQuestionsListQuery({ page });

	return (
		<Flex componentType="main" direction="column" gap="24">
			<SearchSection to="create" />
			<Card className={styles.content}>
				<QuestionsTable questions={questions?.data} />
				<QuestionPagePagination questionsResponse={questions} />
			</Card>
		</Flex>
	);
};

export default QuestionsPage;
