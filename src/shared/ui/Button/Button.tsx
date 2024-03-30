import React, { FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
	children: string;
}

export const Button: FC<ButtonProps> = ({ children }) => {
	return <button className={styles.button}>{children}</button>;
};
