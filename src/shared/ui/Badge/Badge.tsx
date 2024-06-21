import React from 'react';

import styles from './Badge.module.css';

interface BadgeProps {
	/* The prop count is used for dynamically displaying a numerical value in the Badge component */
	count: number;
}

export const Badge = ({ count }: BadgeProps) => {
	return <div className={styles.badge}>{count}</div>;
};
