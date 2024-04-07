import React, { FC } from 'react';
import { NavLink, useMatch } from 'react-router-dom';

import Main from '@/shared/assets/icons/main.svg';
import Menu from '@/shared/assets/icons/menu.svg';
import Questions from '@/shared/assets/icons/questions.svg';
import Verification from '@/shared/assets/icons/verification.svg';
import { Badge } from '@/shared/ui/Badge';

import { categoryCounts, categoryTitles } from '../../model/category';

import styles from './NavigationSidebarItem.module.css';

interface NavigationItemProps {
	title?: string;
	name?: string;
}

interface CategoryImages {
	[key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}

const categoryImages: CategoryImages = {
	'': Main,
	questions: Questions,
	verification: Verification,
	default: Menu,
};

const NavigationItem: FC<NavigationItemProps> = ({ title, name = '' }) => {
	const ImageComponent = categoryImages[name] || categoryImages.default;
	const match = useMatch(`/${name}/*`);
	const count = categoryCounts[name] || 0;

	return (
		<NavLink to={`/${name}`} className={`${styles.item} ${match ? styles.active : ''}`}>
			<div className={styles.wrap}>
				<ImageComponent className={styles.image} />
				<span className={styles.span}>{title}</span>
			</div>
			{count > 0 && <Badge count={count} />}
		</NavLink>
	);
};

export const NavigationSidebarItem: FC = () => {
	return (
		<nav className={styles.list}>
			{Object.entries(categoryTitles).map(([name, title]) => {
				return <NavigationItem key={name} name={name} title={title} />;
			})}
		</nav>
	);
};
