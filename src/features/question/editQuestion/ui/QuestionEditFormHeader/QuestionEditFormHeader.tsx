import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';

import { useEditQuestionMutation } from '../../api/editQuestionApi';
import { QuestionEditFormValues } from '../../model/types/questionEditPageTypes';

export const QuestionEditFormHeader = () => {
	const { t } = useTranslation(['question', 'translation']);
	const navigate = useNavigate();

	const { handleSubmit, reset } = useFormContext<QuestionEditFormValues>();

	const [editQuestionMutation, { isLoading, isSuccess }] = useEditQuestionMutation();
	const onResetFormValues = () => {
		reset();
	};

	const onEditQuestion = async (data: QuestionEditFormValues) => {
		await editQuestionMutation(data);
	};

	useEffect(() => {
		if (isSuccess) {
			navigate(-1);
		}
	}, [navigate, isSuccess]);

	return (
		<Flex align="center" gap="8">
			<BackButton />
			<h1>{t(Translations.QUESTION_EDIT_PAGE_TITLE)}</h1>
			<Button onClick={onResetFormValues}>{t(Translations.CANCEL, { ns: 'translation' })}</Button>
			<Button disabled={isLoading} onClick={handleSubmit(onEditQuestion)}>
				{t(Translations.SAVE, { ns: 'translation' })}
			</Button>
		</Flex>
	);
};
