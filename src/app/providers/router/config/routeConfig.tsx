import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { ProfessionsPage } from '@/pages/ProfessionsPage';
import { QuestionCreatePage } from '@/pages/QuestionCreatePage';
import { QuestionDetailPage } from '@/pages/QuestionDetailPage';
import { QuestionEditPage } from '@/pages/QuestionEditPage';
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
				path: 'questions/:questionId/edit',
				element: <QuestionEditPage />,
			},
			{
				path: 'questions/create',
				element: <QuestionCreatePage />,
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
