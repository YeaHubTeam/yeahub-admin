import React, { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line
import Logo from '@/shared/assets/icons/logo.svg';

import styles from './AppLogo.module.css';

interface AppLogoProps {
	className: string;
	children?: ReactNode;
}

export const AppLogo: FC<AppLogoProps> = () => {
	return (
		<NavLink to="/" className={styles.logo}>
			<Logo className={styles.image} />
		</NavLink>
	);
};
