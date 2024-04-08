import { useTranslation } from 'react-i18next';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';

import { Question } from '../../model/types/question';

interface QuestionCardProps {
	question: Question;
}

export const QuestionCard = ({ question }: QuestionCardProps) => {
	const { t } = useTranslation('question');

	const questionInfoFields = [
		{
			label: t(Translations.QUESTION_TITLE),
			value: question.title,
		},
		{
			label: t(Translations.QUESTION_TYPE),
			value: question.type,
		},
		{
			label: t(Translations.QUESTION_TAGS),
			value: question.tags?.join(', '),
		},
		{
			label: t(Translations.QUESTION_AUTHOR),
			value: question.author,
		},
	];

	return (
		<div>
			{questionInfoFields.map((field) => (
				<Flex gap="24" align="center" key={field.label}>
					<div>{field.label}</div>
					<div>{field.value}</div>
				</Flex>
			))}
		</div>
	);
};
