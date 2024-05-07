import { useTranslation } from 'react-i18next';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Card } from '@/shared/ui/Card';
import { Flex } from '@/shared/ui/Flex';

import { Specialization } from '../../model/types/specialization';

interface SpecializationCardProps {
	specialization: Specialization;
}

export const SpecializationCard = ({ specialization }: SpecializationCardProps) => {
	const { t } = useTranslation('specialization');

	const specializationInfoFields = [
		{
			label: t(Translations.SPECIALIZATION_TITLE),
			value: specialization.title,
		},
		{
			label: t(Translations.SPECIALIZATION_DESCRIPTION),
			value: specialization.description,
		},
	];

	return (
		<Card>
			{specializationInfoFields.map((field) => (
				<Flex gap="24" align="center" key={field.label}>
					<div>{field.label}</div>
					<div>{field.value}</div>
				</Flex>
			))}
		</Card>
	);
};
