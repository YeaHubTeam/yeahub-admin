import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string | ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...otherProps }) => {
	return (
		<button className={styles.button} {...otherProps}>
			{children}
		</button>
	);
};
