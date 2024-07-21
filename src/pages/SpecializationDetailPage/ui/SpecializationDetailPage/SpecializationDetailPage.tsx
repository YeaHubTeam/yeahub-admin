import { useTranslation } from 'react-i18next';
import { NavLink, useParams } from 'react-router-dom';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { BackButton } from '@/shared/ui/BackButton';
import { Flex } from '@/shared/ui/Flex';

import { useGetSpecializationByIdQuery, SpecializationCard } from '@/entities/specialization';

/**
 * Page showing detail info about a single question
 * @constructor
 */
const SpecializationDetailPage = () => {
	const { t } = useTranslation();
	const { specializationId } = useParams<{ specializationId: string }>();
	const { data: specialization } = useGetSpecializationByIdQuery(specializationId as string);

	if (!specialization) {
		return null;
	}

	return (
		<main>
			<Flex align="center" gap="8">
				<BackButton />
				<h1>{specialization.title}</h1>
				<NavLink style={{ marginLeft: 'auto' }} to="edit">
					{t(Translations.EDIT)}
				</NavLink>
			</Flex>
			<SpecializationCard specialization={specialization} />
		</main>
	);
};

export default SpecializationDetailPage;
