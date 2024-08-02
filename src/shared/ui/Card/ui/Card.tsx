import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './Card.module.css';

interface CardProps {
	children: ReactNode;
	className?: string;
	dataTestId?: string;
	withShadow?: boolean;
	title?: string;
}

export const Card = ({
	children,
	className = '',
	dataTestId = 'Card',
	withShadow = false,
	title,
}: CardProps) => {
	return (
		<div
			className={classNames(styles.card, className, { [styles['with-shadow']]: withShadow })}
			data-testid={dataTestId}
		>
			{title && <h2 className={styles.title}>{title}</h2>}
			{children}
		</div>
	);
};
