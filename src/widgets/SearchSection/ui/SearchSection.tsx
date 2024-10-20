import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Button, Input, Icon } from 'yeahub-ui-kit';

import { Translations } from '@/shared/config/i18n/i18nTranslations';
import { Card } from '@/shared/ui/Card';

import styles from './SearchSection.module.css';

interface SearchSectionProps {
	to?: string;
	onRemove?: () => void;
	showRemoveButton?: boolean;
	onSearch?: (value: string) => void;
}

export const SearchSection = ({
	to = '/',
	onRemove,
	showRemoveButton,
	onSearch,
}: SearchSectionProps) => {
	const { t } = useTranslation();

	const [value] = useState('');

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		onSearch?.(e.target.value);
	};

	// console.log(searchResults);

	return (
		<Card>
			<section className={styles.section}>
				<Input
					onChange={handleSearch}
					className={styles.input}
					preffix={<Icon icon={'search'} values={value} />}
				/>
				{showRemoveButton && (
					<Button onClick={onRemove} theme="destructive-tertiary">
						{t(Translations.REMOVE_SELECTED)}
					</Button>
				)}
				<Button size="small" textClassName={styles.navigate}>
					<NavLink className={styles.link} to={to}>
						{t(Translations.CREATE)}
					</NavLink>
				</Button>
			</section>
		</Card>
	);
};
