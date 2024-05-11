import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';

import { Skill } from '@/entities/skill';

import { useEditSkillMutation } from '../../api/editSkillApi';

export const SkillEditFormHeader = () => {
	const { t } = useTranslation(['skill', 'translation']);
	const navigate = useNavigate();

	const { handleSubmit, reset } = useFormContext<Skill>();

	const [editSkillMutation, { isLoading }] = useEditSkillMutation();
	const onResetFormValues = () => {
		reset();
	};

	const onEditSkill = async (data: Skill) => {
		await editSkillMutation(data)
			.unwrap()
			.then(() => {
				navigate(-1);
			})
			.catch((e) => console.error(e));
	};

	return (
		<Flex align="center" gap="8">
			<BackButton />
			<h1>{t(Translations.SKILL_EDIT_PAGE_TITLE)}</h1>
			<Button onClick={onResetFormValues}>{t(Translations.CANCEL, { ns: 'translation' })}</Button>
			<Button disabled={isLoading} onClick={handleSubmit(onEditSkill)}>
				{t(Translations.SAVE, { ns: 'translation' })}
			</Button>
		</Flex>
	);
};
