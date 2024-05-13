import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchIcon } from '@/shared/assets/icons/Search';
import { Translations } from '@/shared/config/i18n/i18nTranslations';

import styles from './SearchInput.module.css';

interface SearchInputProps {
	onSearch: (query: string) => void;
	placeholder?: string;
	variant?: 'default' | 'long';
}

export const SearchInput: FC<SearchInputProps> = ({
	onSearch,
	// placeholder = 'найти',
	variant = 'default',
}) => {
	const [query, setQuery] = useState('');
	const { t } = useTranslation('searchinput');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setQuery(value);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			const trimmedQuery = query.trim();
			if (trimmedQuery !== '') {
				onSearch(query);
				setQuery('');
			}
		}
	};

	return (
		<form>
			<div style={{ position: 'relative' }}>
				<input
					className={`${styles.search} ${variant === 'long' && styles.long}`}
					type="text"
					value={query}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					placeholder={t(Translations.SEARCHINPUT_PLACEHOLDER)}
					data-testid="search-input"
				/>
				<SearchIcon />
			</div>
		</form>
	);
};
