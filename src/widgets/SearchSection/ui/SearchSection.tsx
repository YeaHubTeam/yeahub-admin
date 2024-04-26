import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

import { SearchInput } from '@/features/SearchInput';

import styles from './SearchSection.module.css';

interface SearchSectionProps {
	to?: string;
}

export const SearchSection = ({ to = '/' }: SearchSectionProps) => {
	const { t } = useTranslation();
	const [searchResults, setSearchResults] = useState<string>('');

	const handleSearch = (query: string) => {
		setSearchResults(query);
	};

	console.log(searchResults);

	return (
		<Card>
			<section className={styles.section}>
				<SearchInput onSearch={handleSearch} variant={'long'} />
				<Button>
					<NavLink to={to}>{t(Translations.CREATE)}</NavLink>
				</Button>
			</section>
		</Card>
	);
};
