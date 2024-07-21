import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';

import { Specialization } from '@/entities/specialization';

import { useEditSpecializationMutation } from '../../api/editSpecializationApi';

export const SpecializationEditFormHeader = () => {
	const { t } = useTranslation(['specialization', 'translation']);
	const navigate = useNavigate();

	const { handleSubmit, reset } = useFormContext<Specialization>();

	const [editSpecializationMutation, { isLoading }] = useEditSpecializationMutation();
	const onResetFormValues = () => {
		reset();
	};

	const onEditSpecialization = async (data: Specialization) => {
		await editSpecializationMutation(data)
			.unwrap()
			.then(() => {
				navigate(-1);
			})
			.catch((e) => console.error(e));
	};

	return (
		<Flex align="center" gap="8">
			<BackButton />
			<h1>{t(Translations.SPECIALIZATION_EDIT_PAGE_TITLE)}</h1>
			<Button onClick={onResetFormValues}>{t(Translations.CANCEL, { ns: 'translation' })}</Button>
			<Button disabled={isLoading} onClick={handleSubmit(onEditSpecialization)}>
				{t(Translations.SAVE, { ns: 'translation' })}
			</Button>
		</Flex>
	);
};
