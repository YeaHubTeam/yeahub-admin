import React, { FC, useState } from 'react';

import { Button } from '../Button/index';
import { SearchInput } from '../SearchInput/index';

import styles from './SearchSection.module.css';

export const SearchSection: FC = () => {
	const [searchResults, setSearchResults] = useState<string>('');

	const handleSearch = (query: string) => {
		setSearchResults(query);
	};

	console.log(searchResults);

	return (
		<section className={styles.secion}>
			<SearchInput onSearch={handleSearch} variant={'long'} />
			<Button>Создать</Button>
		</section>
	);
};
