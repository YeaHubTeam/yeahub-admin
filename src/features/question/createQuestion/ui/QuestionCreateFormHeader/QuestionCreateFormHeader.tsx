import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
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
		<Flex align="center" gap="8" justify={'between'}>
			<BackButton />
			<Button disabled={isLoading} onClick={handleSubmit(onCreateQuestion)}>
				{t(Translations.SAVE, { ns: 'translation' })}
			</Button>
		</Flex>
	);
};
