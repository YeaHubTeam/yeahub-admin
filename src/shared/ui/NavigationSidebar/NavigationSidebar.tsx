import React, { FC } from 'react';
import { NavLink, useMatch } from 'react-router-dom';

// eslint-disable-next-line
import Main from '@/shared/assets/icons/main.svg';

// eslint-disable-next-line
import Menu from '@/shared/assets/icons/menu.svg';

// eslint-disable-next-line
import Questions from '@/shared/assets/icons/questions.svg';

// eslint-disable-next-line
import Verification from '@/shared/assets/icons/verification.svg';

import { Badge } from '../Badge';

import { categoryCounts, categoryTitles } from './category';
import styles from './NavigationSidebar.module.css';

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
	const match = useMatch(`/${name}`);
	const count = categoryCounts[name] || 0;

	return (
		<li className={`${styles.item} ${match ? styles.active : ''}`} key={name}>
			<NavLink to={`/${name}`} className={styles.link}>
				<div className={styles.wrap}>
					<div className={styles.wrap}>
						<ImageComponent className={styles.image} />
						<span className={styles.span}>{title}</span>
					</div>
					{count > 0 && <Badge count={count} />}
				</div>
			</NavLink>
		</li>
	);
};

export const NavigationSidebar: FC = () => {
	return (
		<nav>
			<ul className={styles.list}>
				{Object.entries(categoryTitles).map(([name, title]) => {
					return <NavigationItem key={name} name={name} title={title} />;
				})}
			</ul>
		</nav>
	);
};
