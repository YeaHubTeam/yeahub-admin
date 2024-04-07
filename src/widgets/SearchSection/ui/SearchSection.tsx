import { FC, useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

import { SearchInput } from '@/features/SearchInput';

import styles from './SearchSection.module.css';

export const SearchSection: FC = () => {
	const [searchResults, setSearchResults] = useState<string>('');

	const handleSearch = (query: string) => {
		setSearchResults(query);
	};

	console.log(searchResults);

	return (
		<Card>
			<section className={styles.section}>
				<SearchInput onSearch={handleSearch} variant={'long'} />
				<Button>Создать</Button>
			</section>
		</Card>
	);
};
