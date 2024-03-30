import { createBrowserRouter } from 'react-router-dom';

// eslint-disable-next-line
import { Main } from '@/widgets/Main/index';
// eslint-disable-next-line
import { Professions } from '@/widgets/Professions/index';
// eslint-disable-next-line
import { Questions } from '@/widgets/Questions/index';
// eslint-disable-next-line
import { Skills } from '@/widgets/Skills/index';
// eslint-disable-next-line
import { Verification } from '@/widgets/Verification/index';
// eslint-disable-next-line
import { Layout } from '@/app/components/Layout/Layout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: 'questions',
				element: <Questions />,
			},
			{
				path: 'verification',
				element: <Verification />,
			},
			{
				path: 'professions',
				element: <Professions />,
			},
			{
				path: 'skills',
				element: <Skills />,
			},
		],
	},
]);
