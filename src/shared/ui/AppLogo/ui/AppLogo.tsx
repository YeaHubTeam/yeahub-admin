import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

import { LayoutToggleBtn } from '../../../assets/icons/LayoutToggleBtn';
import { Logo } from '../../../assets/icons/Logo';
// eslint-disable-next-line import/no-internal-modules
import logoImg from '../../../assets/images/logoImg.png';

import styles from './AppLogo.module.css';

interface AppLogoProps {
	isOpen: boolean;
	onToggleSidebar: (isOpen: boolean) => void;
}

export const AppLogo = ({ isOpen, onToggleSidebar }: AppLogoProps) => {
	const handleToggleSidebar = () => {
		onToggleSidebar(!isOpen);
	};

	return (
		<div className={styles.logo}>
			<NavLink to="/" className={styles.nav}>
				<img src={logoImg} alt="logo_image" />
				{isOpen && <Logo />}
			</NavLink>
			<button
				className={classnames(styles.btn, !isOpen && styles.btnclose)}
				onClick={handleToggleSidebar}
			>
				<LayoutToggleBtn />
			</button>
		</div>
	);
};
