import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
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
		<Flex align="center" gap="8" justify={'between'}>
			<BackButton />
			<Flex gap="8">
				<Button size="small" onClick={onResetFormValues} theme="secondary">
					{t(Translations.CANCEL, { ns: 'translation' })}
				</Button>
				<Button size="small" disabled={isLoading} onClick={handleSubmit(onEditQuestion)}>
					{t(Translations.SAVE, { ns: 'translation' })}
				</Button>
			</Flex>
		</Flex>
	);
};
