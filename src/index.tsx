import { createRoot } from 'react-dom/client';

import '@/shared/config/i18n/i18n';

import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/providers/router';
import { StoreProvider } from '@/app/providers/store';

import { Suspense } from 'react';

const root = document.getElementById('root');

const container = createRoot(root as HTMLElement);

container.render(
	<Suspense fallback="">
		<StoreProvider>
			<RouterProvider router={router} />
		</StoreProvider>
	</Suspense>,
);
