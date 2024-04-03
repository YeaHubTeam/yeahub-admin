import classNames from 'classnames';
import { createFocusTrap } from 'focus-trap';
import throttle from 'lodash.throttle';
import { FC, HTMLAttributes, RefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './Dropdown.module.css';

/*
throttle используется для того, чтобы уменьшить количество вызовов calcCoords при изменении размера окна браузера. Нужня для избежания проблемам с производительностью

focus-trap нужен для того что бы поймать фокус и направить его в Dropdown
*/

interface DropdownProps extends HTMLAttributes<HTMLElement> {
	targetRef: RefObject<HTMLElement>;
	shown: boolean;
	onShownChange: (shown: boolean) => void;
}

const calcCoords = (targetElement: HTMLElement) => {
	const rect = targetElement.getBoundingClientRect();

	return {
		top: window.scrollY + rect.bottom + 12,
		right: window.innerWidth - rect.right - window.scrollX,
	};
};

export const Dropdown: FC<DropdownProps> = ({
	targetRef,
	shown,
	onShownChange,
	children,
	style,
	className,
	...restProps
}: DropdownProps) => {
	const [coords, setCoords] = useState({ top: 0, right: 0 });
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

	return shown
		? createPortal(
				<div
					ref={ref}
					{...restProps}
					className={classNames(styles.dropdown, className)}
					style={{ ...style, ...coords }}
				>
					{children}
				</div>,
				document.getElementById('overlay') as HTMLElement,
			)
		: null;
};
