import { Suspense, useState } from 'react';

import { LanguageSwitcher } from '@/features/changingLanguage';

import { Widget } from '@/widgets/Widget';

import styles from './dd.module.css';

export const App = () => {
  const [a, setA] = useState(0);
  return (
    <Suspense fallback="">
      <button onClick={() => setA(a + 1)}>{a}</button>
      <LanguageSwitcher />
      <Widget />
      <h1 className={styles.vv}>Yeahub</h1>
    </Suspense>
  );
};
