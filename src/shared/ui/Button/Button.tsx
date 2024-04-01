import React, { FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
	/*Проп children используется для передачи дочерних элементов */
	children: string;
}

export const Button: FC<ButtonProps> = ({ children }) => {
	return <button className={styles.button}>{children}</button>;
};
