import { FC, ReactNode } from 'react';

import styles from './Content.module.css';

interface ContentProps {
	className: string;
	children?: ReactNode;
}

export const Content: FC<ContentProps> = () => {
	return <aside className={styles.Content}></aside>;
};
