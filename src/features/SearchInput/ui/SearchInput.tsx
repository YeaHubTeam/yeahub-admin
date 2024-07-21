import React, { useState } from 'react';

import SearchIcon from '@/shared/assets/icons/search.svg';

import styles from './SearchInput.module.css';

interface SearchInputProps {
	onSearch: (query: string) => void;
	placeholder?: string;
	variant?: 'default' | 'long';
}

export const SearchInput = ({
	onSearch,
	placeholder = 'найти',
	variant = 'default',
}: SearchInputProps) => {
	const [query, setQuery] = useState('');

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
					className={classnames(styles.search, styles.input, {
						[styles.long]: variant === 'long',
					})}
					type="text"
					value={query}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					placeholder={placeholder}
				/>
				<SearchIcon
					style={{
						position: 'absolute',
						left: '12px',
						top: '50%',
						transform: 'translateY(-50%)',
						color: 'var(--foreground-primary)',
						width: '20px',
						height: '20px',
					}}
				/>
			</div>
		</form>
	);
};
