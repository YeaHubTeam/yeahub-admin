import React, { FC } from 'react';

import styles from './Badge.module.css';

interface BadgeProps {
	/* The prop count is used for dynamically displaying a numerical value in the Badge component */
	count: number;
}

export const Badge: FC<BadgeProps> = ({ count }) => {
	return <div className={styles.badge}>{count}</div>;
};
