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

	return (
		<Flex componentType="main" direction="column" gap="24">
			<SearchSection />
			<Card className={styles.content}>
				<QuestionsTable questions={questions} />
				<QuestionPagePagination questions={questions} />
			</Card>
		</Flex>
	);
};

export default QuestionsPage;
