import classnames from 'classnames';
import React, { FC } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Main from '@/shared/assets/icons/main.svg';
import Menu from '@/shared/assets/icons/menu.svg';
import Questions from '@/shared/assets/icons/questions.svg';
import Skills from '@/shared/assets/icons/skills.svg';
import Specializations from '@/shared/assets/icons/specialization.svg';
import Users from '@/shared/assets/icons/users.svg';
import Verification from '@/shared/assets/icons/verification.svg';
import { Badge } from '@/shared/ui/Badge';

import { categoryCounts, categoryTitles } from '../../model/category';

import styles from './NavigationSidebarItem.module.css';

interface NavigationSidebarItemProps {
	isOpen: boolean;
}

interface NavigationItemProps {
	title?: string;
	name?: string;
	isOpen: boolean;
}

interface CategoryImages {
	[key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}

const categoryImages: CategoryImages = {
	'': Main,
	users: Users,
	specializations: Specializations,
	verification: Verification,
	skills: Skills,
	questions: Questions,
	default: Menu,
};

export const NavigationSidebarItem = ({ isOpen }: NavigationSidebarItemProps) => {
	return (
		<CSSTransition
			in={isOpen}
			timeout={500}
			classNames={{
				enter: styles.listtransitionenter,
				enterActive: styles.listtransitionenteractive,
				enterDone: styles.listtransitionenterdone,
				exitActive: styles.listtransitionexitactive,
				exit: styles.listtransitionexit,
				exitDone: styles.listtransitionexitdone,
			}}
		>
			<div className={classnames(styles.list)}>
				<nav>
					{Object.entries(categoryTitles).map(([name, title]) => {
						return <NavigationItem key={name} name={name} title={title} isOpen={isOpen} />;
					})}
				</nav>
			</div>
		</CSSTransition>
	);
};

const NavigationItem: FC<NavigationItemProps> = ({ title, name = '', isOpen }) => {
	const ImageComponent = categoryImages[name] || categoryImages.default;
	const match = useMatch(`/${name}/*`);
	const count = categoryCounts[name] || 0;

	return (
		<NavLink to={`/${name}`} className={classnames(styles.item)}>
			<div className={styles.wrap}>
				<div
					className={classnames(styles.image, {
						[styles.active]: match,
					})}
				>
					<ImageComponent className={styles.imagesvg} />
				</div>
				<CSSTransition
					in={isOpen}
					timeout={100}
					classNames={{
						enter: styles.spantransitionEnter,
						enterActive: styles.spantransitionenteractive,
						exitActive: styles.spantransitionexitactive,
						exit: styles.spantransitionexit,
					}}
					mountOnEnter={true}
					unmountOnExit={true}
				>
					<span
						className={classnames(styles.span, {
							[styles.active]: match,
						})}
					>
						{title}
					</span>
				</CSSTransition>
			</div>
			{count > 0 && <Badge count={count} />}
		</NavLink>
	);
};
