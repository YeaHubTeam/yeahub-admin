import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { authActions } from '@/entities/auth';
import { useFetchUserMutation } from '@/entities/auth';

import { Header } from '@/widgets/Header';
import { NavigationSidebar } from '@/widgets/NavigationSidebar';

import styles from './MainLayout.module.css';

export const MainLayout = () => {
	const location = useLocation();

	const [fetchUser] = useFetchUserMutation();
	const dispatch = useDispatch();

	useEffect(() => {
		fetchUser()
			.unwrap()
			.then((data) => {
				if (data) {
					dispatch(authActions.setProfile(data));
				}
			});
	}, [fetchUser, dispatch]);

	return (
		<section className={styles.layout}>
			<div className={styles.sidebar}>
				<NavigationSidebar />
			</div>
			<Header />
			<div className={styles.content}>
				<Suspense fallback="">
					<SwitchTransition>
						<CSSTransition
							key={location.pathname}
							timeout={300}
							classNames={{
								enter: styles.pageenter,
								enterActive: styles.pageenteractive,
								enterDone: styles.pageenterdone,
								exit: styles.pageexit,
								exitActive: styles.pageexitactive,
								exitDone: styles.pageexitdone,
							}}
							unmountOnExit
							mountOnEnter
						>
							<Outlet />
						</CSSTransition>
					</SwitchTransition>
				</Suspense>
			</div>
		</section>
	);
};
