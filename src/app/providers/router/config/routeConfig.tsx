import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { ProfessionsPage } from '@/pages/ProfessionsPage';
import { QuestionDetailPage } from '@/pages/QuestionDetailPage';
import { QuestionsPage } from '@/pages/QuestionsPage';
import { SkillsPage } from '@/pages/SkillsPage';
import { VerificationPage } from '@/pages/VerificationPage';

import { App } from '@/app/App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: 'questions',
				element: <QuestionsPage />,
			},
			{
				path: 'questions/:questionId',
				element: <QuestionDetailPage />,
			},
			{
				path: 'verification',
				element: <VerificationPage />,
			},
			{
				path: 'professions',
				element: <ProfessionsPage />,
			},
			{
				path: 'skills',
				element: <SkillsPage />,
			},
		],
	},
]);
