import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string | ReactNode;
}

export const Button = ({ children, ...otherProps }: ButtonProps) => {
	return (
		<button className={styles.button} {...otherProps}>
			{children}
		</button>
	);
};
