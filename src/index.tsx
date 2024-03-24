import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '@/shared/config/i18n/i18n';

import { router } from '@/app/providers/router';

const root = document.getElementById('root');

const container = createRoot(root as HTMLElement);

container.render(<RouterProvider router={router} />);
