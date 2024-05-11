import { useTranslation } from 'react-i18next';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { Skill } from '../../model/types/skill';

interface SkillCardProps {
	skill: Skill;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
	const { t } = useTranslation('skill');

	const skillInfoFields = [
		{
			label: t(Translations.SKILL_TITLE),
			value: skill.title,
		},
		{
			label: t(Translations.SKILL_DESCRIPTION),
			value: skill.description,
		},
		{
			label: t(Translations.SKILL_AVATAR_SRC),
			value: skill.avatarSrc,
		},
	];

	return (
		<Card>
			{skillInfoFields.map((field) => (
				<Flex gap="24" align="center" key={field.label}>
					<div>{field.label}</div>
					<div>{field.value}</div>
				</Flex>
			))}
		</Card>
	);
};
