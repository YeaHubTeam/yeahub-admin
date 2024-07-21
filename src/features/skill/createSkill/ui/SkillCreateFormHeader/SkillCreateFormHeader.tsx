import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';

import { SkillFormValues } from '@/entities/skill';

import { useCreateSkillMutation } from '../../api/createSkillApi';

export const SkillCreateFormHeader = () => {
	const [createSkillMutation, { isLoading }] = useCreateSkillMutation();
	const { handleSubmit } = useFormContext<SkillFormValues>();
	const navigate = useNavigate();
	const { t } = useTranslation(['skill', 'translation']);

	const onCreateSkill = async (data: SkillFormValues) => {
		await createSkillMutation(data)
			.unwrap()
			.then(() => {
				navigate('/skills');
			})
			.catch((e) => {
				console.error(e);
			});
	};

	return (
		<Flex align="center" gap="8">
			<BackButton />
			<h1>{t(Translations.SKILL_CREATE_PAGE_TITLE)}</h1>
			<Button disabled={isLoading} onClick={handleSubmit(onCreateSkill)}>
				{t(Translations.CREATE, { ns: 'translation' })}
			</Button>
		</Flex>
	);
};
