import { useSelector } from 'react-redux';
import { Button } from 'yeahub-ui-kit';

import { selectUserProfile } from '../../model/selectors/authSelectors';

import styles from './Avatar.module.css';

type AvatarProps = {
	onClick?: () => void;
};

export const Avatar = ({ onClick }: AvatarProps) => {
	const user = useSelector(selectUserProfile);
	const { avatarUrl } = user ?? { avatarUrl: '' };

	return (
		<Button theme="tertiary" className={styles.avatar} onClick={onClick}>
			<div className={styles.imagewrap}>
				{<img src={avatarUrl} className={styles.image} alt="avatar" />}
			</div>
		</Button>
	);
};
