import { FC, useState } from 'react';

import { Avatar } from '@/entities/auth';

import { LogoutButton } from '@/features/auth';
import { ColorSchemeSwitcher } from '@/features/colorScheme';

import styles from './Header.module.css';

export const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className={styles.header}>
			<Avatar onClick={() => setIsOpen((prev) => !prev)} />

			<div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
				<ColorSchemeSwitcher />
				<LogoutButton />
			</div>
		</header>
	);
};
