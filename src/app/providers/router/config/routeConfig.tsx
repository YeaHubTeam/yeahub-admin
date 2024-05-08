import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { QuestionCreatePage } from '@/pages/QuestionCreatePage';
import { QuestionDetailPage } from '@/pages/QuestionDetailPage';
import { QuestionEditPage } from '@/pages/QuestionEditPage';
import { QuestionsPage } from '@/pages/QuestionsPage';
import { SkillsPage } from '@/pages/SkillsPage';
import { SpecializationCreatePage } from '@/pages/SpecializationCreatePage';
import { SpecializationDetailPage } from '@/pages/SpecializationDetailPage';
import { SpecializationEditPage } from '@/pages/SpecializationEditPage';
import { SpecializationsPage } from '@/pages/SpecializationsPage';
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
				path: 'specializations',
				element: <SpecializationsPage />,
			},
			{
				path: 'specializations/:specializationId',
				element: <SpecializationDetailPage />,
			},
			{
				path: 'specializations/create',
				element: <SpecializationCreatePage />,
			},
			{
				path: 'specializations/:specializationId/edit',
				element: <SpecializationEditPage />,
			},
			{
				path: 'skills',
				element: <SkillsPage />,
			},
		],
	},
]);
