import { FC, useEffect, useRef, useState } from 'react';

import { Auto } from '@/shared/assets/icons/Auto';
import Check from '@/shared/assets/icons/check.svg';
import { Moon } from '@/shared/assets/icons/Moon';
import { Sun } from '@/shared/assets/icons/Sun';
import { Dropdown } from '@/shared/ui/Dropdown';

import {
	applyScheme,
	getSavedScheme,
	getSystemScheme,
	removeSavedScheme,
} from '../colorSchemeUtils';

import styles from './ColorSchemeSwitcher.module.css';

type ColorSchemeSwitcherValues = 'auto' | 'dark' | 'light';

const matchMedia = window.matchMedia('(prefers-color-scheme:dark)');

export const ColorSchemeSwitcher: FC = () => {
	const [userScheme, setUserScheme] = useState<ColorSchemeSwitcherValues>(
		getSavedScheme() || 'auto',
	);
	const [dropdownShown, setDropdownShown] = useState(false);
	const targetRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (userScheme === 'auto') {
			removeSavedScheme();
			applyScheme(getSystemScheme());
		} else {
			applyScheme(userScheme, true);
		}
	}, [userScheme]);

	useEffect(() => {
		const systemColorSchemeListener = () => {
			if (userScheme === 'auto') {
				applyScheme(getSystemScheme());
			}
		};
		matchMedia.addEventListener('change', systemColorSchemeListener);

		return () => {
			matchMedia.removeEventListener('change', systemColorSchemeListener);
		};
	}, [userScheme]);

	return (
		<div>
			<button
				className={styles.value}
				ref={targetRef}
				onClick={() => {
					setDropdownShown(!dropdownShown);
				}}
			>
				{userScheme === 'auto' && <Auto />}
				{userScheme === 'dark' && <Moon />}
				{userScheme === 'light' && <Sun />}
			</button>
			<Dropdown shown={dropdownShown} onShownChange={setDropdownShown} targetRef={targetRef}>
				<button className={styles.option} onClick={() => setUserScheme('auto')}>
					<Auto />
					<span className={styles.text}>Авто</span>
					{userScheme === 'auto' && <Check style={{ marginLeft: 'auto' }} />}
				</button>
				<button className={styles.option} onClick={() => setUserScheme('light')}>
					<Sun />
					<span className={styles.text}>Светлая</span>
					{userScheme === 'light' && <Check style={{ marginLeft: 'auto' }} />}
				</button>
				<button className={styles.option} onClick={() => setUserScheme('dark')}>
					<Moon />
					<span className={styles.text}>Темная</span>
					{userScheme === 'dark' && <Check style={{ marginLeft: 'auto' }} />}
				</button>
			</Dropdown>
		</div>
	);
};
