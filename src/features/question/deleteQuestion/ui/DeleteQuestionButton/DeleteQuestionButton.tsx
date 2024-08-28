import { useTranslation } from 'react-i18next';
import { Icon, IconButton } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';

import { Question } from '@/entities/question';

import { useDeleteQuestionMutation } from '../../api/deleteQuestionApi';

interface DeleteQuestionButtonProps {
	questionId: Question['id'];
	withText?: boolean;
}

export const DeleteQuestionButton = ({ questionId, withText }: DeleteQuestionButtonProps) => {
	const [deleteQuestionMutation] = useDeleteQuestionMutation();
	const { t } = useTranslation('question');
	const onDeleteQuestion = async () => {
		await deleteQuestionMutation(questionId);
	};

	return withText ? (
		<Flex align="center" gap="4">
			<IconButton
				aria-label="Large"
				icon={
					<Icon onClick={onDeleteQuestion} icon="trash" size={20} color="--palette-ui-red-600" />
				}
				theme="tertiary"
			/>
			<span>{t(Translations.QUESTION_DELETE)}</span>
		</Flex>
	) : (
		<IconButton
			aria-label="Large"
			icon={<Icon onClick={onDeleteQuestion} icon="trash" size={20} color="--palette-ui-red-600" />}
			theme="tertiary"
		/>
	);
};
