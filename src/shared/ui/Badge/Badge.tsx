import React, { FC } from 'react';

import styles from './Badge.module.css';

interface BadgeProps {
	count: number;
}

export const Badge: FC<BadgeProps> = ({ count }) => {
	return <div className={styles.badge}>{count}</div>;
};
