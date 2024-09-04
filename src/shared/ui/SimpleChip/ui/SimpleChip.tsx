import React from 'react';

import { Flex } from '../../Flex';

import styles from './SimpleChip.module.css';

interface SimpleChipProps {
	children: React.ReactNode;
	onDelete: () => void;
}
export const SimpleChip = ({ children, onDelete, ...other }: SimpleChipProps) => {
	return (
		<Flex direction="row" {...other} className={styles.container}>
			<span className={styles.text}>{children}</span>
			<button onClick={onDelete} className={styles.button}>
				x
			</button>
		</Flex>
	);
};
