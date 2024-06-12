import { FC } from 'react';

import { LogoutButton } from '@/features/auth';
import { Avatar } from '@/features/auth';
import { ColorSchemeSwitcher } from '@/features/colorScheme';

import styles from './Header.module.css';

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Avatar />
			<ColorSchemeSwitcher />
			<LogoutButton />
		</header>
	);
};
