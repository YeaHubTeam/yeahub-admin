import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Button } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Card } from '@/shared/ui/Card';

import { SearchInput } from '@/features/SearchInput';

import styles from './SearchSection.module.css';

interface SearchSectionProps {
	to?: string;
	onRemove?: () => void;
	showRemoveButton?: boolean;
}

export const SearchSection = ({ to = '/', onRemove, showRemoveButton }: SearchSectionProps) => {
	const { t } = useTranslation();
	const [searchResults, setSearchResults] = useState<string>('');

	const handleSearch = (query: string) => {
		setSearchResults(query);
	};

	console.log(searchResults);

	return (
		<Card>
			<section className={styles.section}>
				<SearchInput onSearch={handleSearch} variant={'default'} />
				{showRemoveButton && (
					<Button
						onClick={onRemove}
						theme="destructive-tertiary"
						value={t(Translations.REMOVE_SELECTED)}
					/>
				)}
				<Button>
					<NavLink className={styles.navigate} to={to}>
						{t(Translations.CREATE)}
					</NavLink>
				</Button>
			</section>
		</Card>
	);
};
