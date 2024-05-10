import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';

import { SkillFormValues } from '../../model/types/skill';

import styles from './SkillForm.module.css';

export const SkillForm = () => {
	const { t } = useTranslation('skill');
	const {
		register,
		formState: { errors },
	} = useFormContext<SkillFormValues>();

	return (
		<Flex direction="column" gap="8">
			<Flex align="center" gap="8">
				<label htmlFor="title">{t(Translations.SKILL_TITLE)}</label>
				<input className={styles.input} {...register('title')} />
			</Flex>
			{errors.title ? <div>{errors.title.message}</div> : null}
			<Flex align="center" gap="8">
				<label htmlFor="description">{t(Translations.SKILL_DESCRIPTION)}</label>
				<input className={styles.input} {...register('description')} />
			</Flex>
			{errors.description ? <div>{errors.description.message}</div> : null}
			<Flex align="center" gap="8">
				<label htmlFor="imageSrc">{t(Translations.SKILL_AVATAR_SRC)}</label>
				<input className={styles.input} {...register('avatarSrc')} />
			</Flex>
			{errors.avatarSrc ? <div>{errors.avatarSrc.message}</div> : null}
		</Flex>
	);
};
