import { Suspense } from 'react';

import { LanguageSwitcher } from '@/features/changingLanguage';

import { Widget } from '@/widgets/Widget';
import './styles/normalize.css';

import styles from './styles/App.module.css';

export const App = () => {
  return (
    <Suspense fallback="">
      <LanguageSwitcher />
      <Widget />
      <h1 className={styles.vv}>Yeahub</h1>
    </Suspense>
  );
};
