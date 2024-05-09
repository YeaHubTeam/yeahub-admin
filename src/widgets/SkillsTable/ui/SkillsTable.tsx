import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Text } from 'yeahub-ui-kit';

import DetailIcon from '@/shared/assets/icons/eye.svg';
import EditIcon from '@/shared/assets/icons/Pencil.svg';
import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';
import { Table } from '@/shared/ui/Table';

import { Skill } from '@/entities/skill';

interface SkillsTableProps {
	skills?: Skill[];
}

export const SkillsTable = ({ skills }: SkillsTableProps) => {
	const { t } = useTranslation('skill');

	const renderTableHeader = () => {
		const columns = {
			title: t(Translations.SKILL_TITLE),
			description: t(Translations.SKILL_DESCRIPTION),
		};

		return Object.entries(columns)?.map(([k, v]) => <td key={k}>{v}</td>);
	};

	const renderTableBody = (skill: Skill) => {
		const columns = {
			title: skill.title,
			description: skill.description,
		};

		return Object.entries(columns)?.map(([k, v]) => <td key={k}>{v}</td>);
	};

	const renderActions = (skill: Skill) => {
		return (
			<Flex gap="4">
				<NavLink to={`/skills/${skill.id}`}>
					<DetailIcon />
				</NavLink>
				<NavLink to={`/skills/${skill.id}/edit`}>
					<EditIcon />
				</NavLink>
			</Flex>
		);
	};

	if (!skills) {
		return (
			<Flex maxHeight align="center" justify="center">
				<Text title={t(Translations.SKILLS_NOT_ITEMS)} />
			</Flex>
		);
	}

	return (
		<Table
			renderTableHeader={renderTableHeader}
			renderTableBody={renderTableBody}
			renderActions={renderActions}
			items={skills}
		/>
	);
};
