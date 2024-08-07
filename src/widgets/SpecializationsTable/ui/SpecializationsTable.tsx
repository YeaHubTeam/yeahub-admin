import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Text, Icon } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Flex } from '@/shared/ui/Flex';
import { Table } from '@/shared/ui/Table';

import { Specialization } from '@/entities/specialization';

import { DeleteSpecializationButton } from '@/features/specialization/deleteSpecialization';

interface SpecializationsTableProps {
	specializations?: Specialization[];
	selectedSpecializations?: string[];
	onSelectSpecializations?: (ids: string[]) => void;
}

export const SpecializationsTable = ({
	specializations,
	selectedSpecializations,
	onSelectSpecializations,
}: SpecializationsTableProps) => {
	const { t } = useTranslation('specialization');

	const renderTableHeader = () => {
		const columns = {
			title: t(Translations.SPECIALIZATION_TITLE),
			description: t(Translations.SPECIALIZATION_DESCRIPTION),
		};

		return Object.entries(columns)?.map(([k, v]) => <td key={k}>{v}</td>);
	};

	const renderTableBody = (specialization: Specialization) => {
		const columns = {
			title: specialization.title,
			description: specialization.description,
		};

		return Object.entries(columns)?.map(([k, v]) => <td key={k}>{v}</td>);
	};

	const renderActions = (specialization: Specialization) => {
		return (
			<Flex gap="4">
				<NavLink to={`/specializations/${specialization.id}`}>
					<Icon icon="eye" size={20} color={'--palette-ui-purple-700'} />
				</NavLink>
				<NavLink to={`/specializations/${specialization.id}/edit`}>
					<Icon icon="pencil" size={20} color={'--palette-ui-purple-700'} />
				</NavLink>
				<DeleteSpecializationButton specializationId={specialization.id} />
			</Flex>
		);
	};

	if (!specializations) {
		return (
			<Flex maxHeight align="center" justify="center">
				<Text title={t(Translations.SPECIALIZATIONS_NOT_ITEMS)} />
			</Flex>
		);
	}

	return (
		<Table
			renderTableHeader={renderTableHeader}
			renderTableBody={renderTableBody}
			renderActions={renderActions}
			items={specializations}
			selectedItems={selectedSpecializations}
			onSelectItems={onSelectSpecializations}
		/>
	);
};
