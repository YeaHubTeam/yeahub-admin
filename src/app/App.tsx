import { Suspense } from 'react';
import './styles/normalize.css';

import { Layout } from './components/Layout/Layout';

export const App = () => {
	return (
		<Suspense fallback="">
			<Layout />
		</Suspense>
	);
};
