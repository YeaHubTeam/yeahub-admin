import classNames from 'classnames';
import React, { ReactNode } from 'react';

import styles from './Card.module.css';

interface CardProps {
	children: ReactNode;
	className?: string;
	dataTestId?: string;
}

export const Card = ({ children, className = '', dataTestId = 'Card' }: CardProps) => {
	return (
		<div className={classNames(styles.card, className)} data-testid={dataTestId}>
			{children}
		</div>
	);
};
