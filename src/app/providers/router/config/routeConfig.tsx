import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/app/App';
// import adminRoutes from 'admin/router'; ###uncomment when we add the admin panel

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // ...adminRoutes,  ###uncomment when we add the admin panel
        ],
    },
]);
