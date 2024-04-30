import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';

import { useCreateQuestionMutation } from '../../api/createQuestionApi';
import {
	QuestionCreateFormValues,
	QuestionCreateSchema,
} from '../../model/types/questionCreatePageTypes';

export const QuestionCreateFormHeader = () => {
	const [createQuestionMutation, { isLoading, isSuccess }] = useCreateQuestionMutation();
	const { handleSubmit } = useFormContext<QuestionCreateSchema>();
	const navigate = useNavigate();
	const { t } = useTranslation(['question', 'translation']);

	const onCreateQuestion = async (data: QuestionCreateFormValues) => {
		await createQuestionMutation(data);
	};

	useEffect(() => {
		if (isSuccess) {
			navigate('/questions');
		}
	}, [isSuccess, navigate]);

	return (
		<Flex align="center" gap="8">
			<BackButton />
			<h1>{t(Translations.QUESTION_CREATE_PAGE_TITLE)}</h1>
			<Button disabled={isLoading} onClick={handleSubmit(onCreateQuestion)}>
				{t(Translations.CREATE, { ns: 'translation' })}
			</Button>
		</Flex>
	);
};
