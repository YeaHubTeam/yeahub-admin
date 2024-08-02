import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';
import { Button } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
import { Flex } from '@/shared/ui/Flex';

import { QuestionCard, useGetQuestionByIdQuery } from '@/entities/question';

/**
 * Page showing detail info about a single question
 * @constructor
 */
const QuestionDetailPage = () => {
	const { t } = useTranslation();
	const { questionId } = useParams<{ questionId: string }>();
	const { data: question } = useGetQuestionByIdQuery(questionId as string);

	if (!question) {
		return null;
	}

	return (
		<main>
			<Flex align="center" gap="8" style={{ marginBottom: 34 }}>
				<BackButton />
				<NavLink style={{ marginLeft: 'auto' }} to="edit">
					<Button> {t(Translations.EDIT)}</Button>
				</NavLink>
			</Flex>
			<QuestionCard question={question} />
		</main>
	);
};

export default QuestionDetailPage;
