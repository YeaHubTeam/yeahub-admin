import { createBrowserRouter } from 'react-router-dom';

import { PrivateRoute } from '@/features/auth';

import { AuthPage } from '@/pages/AuthPage';
import { MainPage } from '@/pages/MainPage';
import { QuestionCreatePage } from '@/pages/QuestionCreatePage';
import { QuestionDetailPage } from '@/pages/QuestionDetailPage';
import { QuestionEditPage } from '@/pages/QuestionEditPage';
import { QuestionsPage } from '@/pages/QuestionsPage';
import { SkillCreatePage } from '@/pages/SkillCreatePage';
import { SkillDetailPage } from '@/pages/SkillDetailPage';
import { SkillEditPage } from '@/pages/SkillEditPage';
import { SkillsPage } from '@/pages/SkillsPage';
import { SpecializationCreatePage } from '@/pages/SpecializationCreatePage';
import { SpecializationDetailPage } from '@/pages/SpecializationDetailPage';
import { SpecializationEditPage } from '@/pages/SpecializationEditPage';
import { SpecializationsPage } from '@/pages/SpecializationsPage';
import { UsersPage } from '@/pages/Users';
import { VerificationPage } from '@/pages/VerificationPage';

import { App } from '@/app/App';

export const router = createBrowserRouter([
	{
		path: 'admin/login',
		element: <AuthPage />,
	},
	{
		path: '/',
		element: (
			<PrivateRoute>
				<App />
			</PrivateRoute>
		),
		children: [
			{
				path: '/',
				element: (
					<PrivateRoute>
						<MainPage />
					</PrivateRoute>
				),
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
			{
				path: 'skills/:skillId',
				element: <SkillDetailPage />,
			},
			{
				path: 'skills/:skillId/edit',
				element: <SkillEditPage />,
			},
			{
				path: 'skills/create',
				element: <SkillCreatePage />,
			},
			{
				path: 'users',
				element: <UsersPage />,
			},
		],
	},
	{
		path: '*',
		element: (
			<PrivateRoute>
				<App />
			</PrivateRoute>
		),
	},
]);
