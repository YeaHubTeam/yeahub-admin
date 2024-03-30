import { FC } from 'react';

// eslint-disable-next-line
import Message from '@/shared/assets/icons/message.svg';
// eslint-disable-next-line
import Notification from '@/shared/assets/icons/notification.svg';
// eslint-disable-next-line
import Settings from '@/shared/assets/icons/settings.svg';
// eslint-disable-next-line
import Avatar from '@/shared/assets/images/MockAvatar.png';

import styles from './UserProfileWrap.module.css';

export const UserProfileWrap: FC = () => {
	return (
		<div className={styles.wrap}>
			<Message className={styles.icon} tabIndex={0} />
			<Notification className={styles.icon} tabIndex={0} />
			<Settings className={styles.icon} tabIndex={0} />
			<div className={styles.box}>
				<img className={styles.img} src={Avatar} alt="avatar" />
			</div>
		</div>
	);
};
