import { createRoot } from 'react-dom/client';
import '@/shared/config/i18n/i18n';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/providers/router';
import { StoreProvider } from '@/app/providers/store';

async function enableMocking() {
	const { worker } = await import('./app/msw/browser');
	if (process.env.NODE_ENV !== 'development') {
		return;
	}
	if (!!process.env.REACT_APP_BACKEND_AVAILABLE === true) {
		return worker.stop();
	}
	// return worker.start();
}

const root = document.getElementById('root');
const container = createRoot(root as HTMLElement);

enableMocking().then(() => {
	container.render(
		<StoreProvider>
			<RouterProvider router={router} />
		</StoreProvider>,
	);
});
