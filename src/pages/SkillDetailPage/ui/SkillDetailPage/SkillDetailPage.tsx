import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
import { Flex } from '@/shared/ui/Flex';

import { SkillCard, useGetSkillByIdQuery } from '@/entities/skill';

/**
 * Page showing detail info about a single skill
 * @constructor
 */
const SkillDetailPage = () => {
	const { t } = useTranslation();
	const { skillId } = useParams<{ skillId: string }>();
	const { data: skill } = useGetSkillByIdQuery(skillId as string);

	if (!skill) {
		return null;
	}

	return (
		<main>
			<Flex align="center" gap="8">
				<BackButton />
				<h1>{skill.title}</h1>
				<NavLink style={{ marginLeft: 'auto' }} to="edit">
					{t(Translations.EDIT)}
				</NavLink>
			</Flex>
			<SkillCard skill={skill} />
		</main>
	);
};

export default SkillDetailPage;
