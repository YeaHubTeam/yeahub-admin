import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/providers/router';

const root = document.getElementById('root')

const container = createRoot(root)

container.render(
    <RouterProvider router={router} />
)
