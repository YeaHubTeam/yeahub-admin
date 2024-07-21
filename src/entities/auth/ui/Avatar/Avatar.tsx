import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserProfile } from '../../model/selectors/authSelectors';

import styles from './Avatar.module.css';

export const Avatar = () => {
	const user = useSelector(selectUserProfile);
	const { avatarUrl } = user ?? { avatarUrl: '' };

	return (
		<div className={styles.avatar}>
			<div className={styles.imagewrap}>
				{<img src={avatarUrl} className={styles.image} alt="avatar" />}
			</div>
		</div>
	);
};
