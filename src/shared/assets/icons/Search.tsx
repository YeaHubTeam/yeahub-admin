import { FC } from 'react';

interface ImgCastom {
	alt?: string;
	role?: string;
	className?: string;
}

export const SearchIcon: FC<ImgCastom> = () => {
	return (
		<div
			style={{
				position: 'absolute',
				left: '12px',
				top: '50%',
				transform: 'translateY(-50%)',
				color: 'var(--foreground-primary)',
				width: '20px',
				height: '20px',
				cursor: 'text',
			}}
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
					stroke="#A3A3A3"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.4993 17.4998L13.916 13.9165"
					stroke="#A3A3A3"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};
