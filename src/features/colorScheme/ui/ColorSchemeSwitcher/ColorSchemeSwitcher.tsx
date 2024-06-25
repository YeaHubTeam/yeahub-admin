import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Auto } from '@/shared/assets/icons/Auto';
import { Check } from '@/shared/assets/icons/Check';
import { Moon } from '@/shared/assets/icons/Moon';
import { Sun } from '@/shared/assets/icons/Sun';
import { Dropdown } from '@/shared/ui/Dropdown';

import { ColorSchemeSwitcherValues } from '../../model/types/colorSchemeTypes';
import {
	applyScheme,
	getSavedScheme,
	getSystemScheme,
	removeSavedScheme,
} from '../../utils/colorSchemeUtils';

import styles from './ColorSchemeSwitcher.module.css';

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

	const toggleDropdown = () => {
		setDropdownShown((dropdownShown) => !dropdownShown);
	};

	const handleSchemeChange = useCallback(
		(scheme: ColorSchemeSwitcherValues) => () => {
			return setUserScheme(scheme), closeDropdown();
		},
		[],
	);
	const closeDropdown = () => {
		setDropdownShown(false);
	};

	return (
		<div>
			<button
				aria-haspopup="listbox"
				aria-label="смена темы"
				className={styles.value}
				ref={targetRef}
				onClick={toggleDropdown}
			>
				{userScheme === 'auto' && <Auto />}
				{userScheme === 'dark' && <Moon />}
				{userScheme === 'light' && <Sun />}
			</button>
			<Dropdown shown={dropdownShown} onShownChange={setDropdownShown} targetRef={targetRef}>
				<button
					role="option"
					className={styles.option}
					onClick={handleSchemeChange('auto')}
					aria-selected={userScheme === 'auto'}
				>
					<Auto role="img" alt="тема авто" />
					<span className={styles.text}>Авто</span>
					{userScheme === 'auto' && <Check />}
				</button>

				<button
					role="option"
					className={styles.option}
					onClick={handleSchemeChange('light')}
					aria-selected={userScheme === 'light'}
				>
					<Sun role="img" alt="тема светлая" />
					<span className={styles.text}>Светлая</span>
					{userScheme === 'light' && <Check />}
				</button>

				<button
					role="option"
					name="dark"
					className={styles.option}
					onClick={handleSchemeChange('dark')}
					aria-selected={userScheme === 'dark'}
				>
					<Moon role="img" alt="тема темная" />
					<span className={styles.text}>Темная</span>
					{userScheme === 'dark' && <Check />}
				</button>
			</Dropdown>
		</div>
	);
};
