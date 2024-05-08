import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';

import { SpecializationFormValues } from '@/entities/specialization';

import { useCreateSpecializationMutation } from '../../api/createSpecializationApi';
import { SpecializationCreateSchema } from '../../model/types/specializationCreateTypes';

export const SpecializationCreateFormHeader = () => {
	const [createSpecializationMutation, { isLoading }] = useCreateSpecializationMutation();
	const { handleSubmit } = useFormContext<SpecializationCreateSchema>();
	const navigate = useNavigate();
	const { t } = useTranslation(['specialization', 'translation']);

	const onCreateSpecialization = async (data: SpecializationFormValues) => {
		await createSpecializationMutation(data)
			.unwrap()
			.then(() => {
				navigate('/specializations');
			})
			.catch((e) => {
				console.error(e);
			});
	};

	return (
		<Flex align="center" gap="8">
			<BackButton />
			<h1>{t(Translations.SPECIALIZATION_CREATE_PAGE_TITLE)}</h1>
			<Button disabled={isLoading} onClick={handleSubmit(onCreateSpecialization)}>
				{t(Translations.CREATE, { ns: 'translation' })}
			</Button>
		</Flex>
	);
};
