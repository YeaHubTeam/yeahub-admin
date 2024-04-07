import { useParams } from 'react-router-dom';

import { QuestionCard } from '@/entities/Question';

import { useGetQuestionByIdQuery } from '../../api/questionDetailPageApi';

/**
 * Page showing detail info about a single question
 * @constructor
 */
const QuestionDetailPage = () => {
	const { questionId } = useParams<{ questionId: string }>();
	const { data: question } = useGetQuestionByIdQuery(questionId as string);

	if (!question) {
		return null;
	}

	return <QuestionCard question={question} />;
};

export default QuestionDetailPage;
