import React, { FC, ReactNode, useState } from 'react';

import { SearchInput } from '@/shared/ui/SearchInput/index';
import { UserProfileWrap } from '@/shared/ui/UserProfileWrap/index';

import styles from './Header.module.css';

interface HeaderProps {
	className: string;
	children?: ReactNode;
}

export const Header: FC<HeaderProps> = () => {
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
