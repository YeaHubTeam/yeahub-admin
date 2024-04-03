import { createBrowserRouter } from 'react-router-dom';

import { Main } from '@/pages/Main';
import { Professions } from '@/pages/Professions';
import { Questions } from '@/pages/Questions';
import { Skills } from '@/pages/Skills';
import { Verification } from '@/pages/Verification';

import { App } from '@/app/App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
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
