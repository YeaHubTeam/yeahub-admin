import { FC, useState } from 'react';

import { UserProfileWrap } from '@/shared/ui/UserProfileWrap';

import { SearchInput } from '@/features/SearchInput';

import styles from './Header.module.css';

export const Header: FC = () => {
	const [searchResults, setSearchResults] = useState<string>('');

	const handleSearch = (query: string) => {
		setSearchResults(query);
	};

	console.log(searchResults);

	return (
		<header className={styles.header}>
			<SearchInput onSearch={handleSearch} placeholder={'Найти человека, мероприятие...'} />
			<UserProfileWrap />
		</header>
	);
};
