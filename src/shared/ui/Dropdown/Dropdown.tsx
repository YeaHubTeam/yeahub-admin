import classnames from 'classnames';
import { createFocusTrap } from 'focus-trap';
import throttle from 'lodash.throttle';
import { HTMLAttributes, RefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './Dropdown.module.css';

interface DropdownProps extends HTMLAttributes<HTMLElement> {
	targetRef: RefObject<HTMLElement>;
	shown: boolean;
	onShownChange: (shown: boolean) => void;
}

type Coords = {
	top: number;
	left?: number;
	right?: number;
};

const calcCoords = (targetElement: HTMLElement): Coords => {
	const rect = targetElement.getBoundingClientRect();

	const coords: Coords = { top: window.scrollY + rect.bottom + 12 };

	coords.right = window.innerWidth - rect.right - window.scrollX;

	return coords;
};

export const Dropdown = ({
	targetRef,
	shown,
	onShownChange,
	children,
	style,
	className,
	...restProps
}: DropdownProps) => {
	const [coords, setCoords] = useState({ top: 0 });
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const trap = createFocusTrap(ref.current as HTMLDivElement, {
			allowOutsideClick: true,
		});

		if (shown) {
			trap.activate();
			setCoords(calcCoords(targetRef.current as HTMLElement));
		}

		return () => {
			trap.deactivate();
		};
	}, [shown]);

	useEffect(() => {
		onShownChange(shown);
	}, [shown, onShownChange]);

	useEffect(() => {
		const documentClickListener = () => {
			onShownChange(false);
		};

		const windowResizeListener = throttle(() => {
			setCoords(calcCoords(targetRef.current as HTMLElement));
		}, 100);
		const root = document.querySelector('#root') as HTMLElement;

		if (shown) {
			root.addEventListener('click', documentClickListener);
			window.addEventListener('resize', windowResizeListener);
		}
		return () => {
			root.removeEventListener('click', documentClickListener);
			window.removeEventListener('resize', windowResizeListener);
		};
	}, [onShownChange, shown]);

	return createPortal(
		<CSSTransition
			in={shown}
			timeout={500}
			mountOnEnter
			unmountOnExit
			classNames={{
				enter: styles.dropdownanimationenter,
				enterActive: styles.dropdownanimationenteractive,
				exitActive: styles.dropdownanimationexitactive,
				exit: styles.dropdownanimationexit,
			}}
		>
			<div
				ref={ref}
				{...restProps}
				className={classnames(styles.dropdown)}
				style={{ ...style, ...coords }}
			>
				{children}
			</div>
		</CSSTransition>,
		document.getElementById('overlay') as HTMLElement,
	);
};
