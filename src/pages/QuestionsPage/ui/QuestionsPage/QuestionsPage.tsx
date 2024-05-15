import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { useGetQuestionsListQuery } from '@/entities/question';

import { QuestionsTable } from '@/widgets/QuestionsTable';
import { SearchSection } from '@/widgets/SearchSection';

import { QuestionPagePagination } from '../QuestionPagePagination/QuestionPagePagination';

import styles from './QuestionsPage.module.css';

/**
 * Page showing info about all the created questions
 * @constructor
 */
const QuestionsPage = () => {
	const { data: questions } = useGetQuestionsListQuery();
	const responseQuestions = questions?.data;

	return (
		<Flex componentType="main" direction="column" gap="24">
			<SearchSection to="create" />
			<Card className={styles.content}>
				<QuestionsTable questions={responseQuestions} />
				<QuestionPagePagination questions={responseQuestions} />
			</Card>
		</Flex>
	);
};

export default QuestionsPage;
