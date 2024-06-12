import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { State } from '@/shared/config/store/State';

import styles from './Avatar.module.css';

export const Avatar: FC = () => {
	const user = useSelector((state: State) => state.userData.user);
	console.log(user);

	if (!user) {
		return <div>Loading...</div>;
	}
	const { firstName, avatarUrl } = user;
	return (
		<div className={styles.avatar}>
			<h4 className={styles.firstname}> {firstName}</h4>
			<div className={styles.imagewrap}>
				{<img src={avatarUrl} className={styles.image} alt="avatar" />}
			</div>
		</div>
	);
};
