import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';

import { SpecializationFormValues } from '../../model/types/specialization';

import styles from './SpecializationForm.module.css';

export const SpecializationForm = () => {
	const { t } = useTranslation('specialization');
	const {
		register,
		formState: { errors },
	} = useFormContext<SpecializationFormValues>();

	return (
		<Flex direction="column" gap="8">
			<Flex align="center" gap="8">
				<label htmlFor="title">{t(Translations.SPECIALIZATION_TITLE)}</label>
				<input className={styles.input} {...register('title')} />
			</Flex>
			{errors.title ? <div>{errors.title.message}</div> : null}
			<Flex align="center" gap="8">
				<label htmlFor="description">{t(Translations.SPECIALIZATION_DESCRIPTION)}</label>
				<input className={styles.input} {...register('description')} />
			</Flex>
			{errors.description ? <div>{errors.description.message}</div> : null}
			<Flex align="center" gap="8">
				<label htmlFor="imageSrc">{t(Translations.SPECIALIZATION_IMAGE_SRC)}</label>
				<input className={styles.input} {...register('imageSrc')} />
			</Flex>
			{errors.imageSrc ? <div>{errors.imageSrc.message}</div> : null}
		</Flex>
	);
};
