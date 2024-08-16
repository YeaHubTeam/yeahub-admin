import { getLogin, getProfile } from '@/entities/auth';
import { getQuestionsList, getQuestionById } from '@/entities/question';

import { checkUsersExists } from '@/features/userSearch';

export const handlers = [
	...getQuestionsList,
	...getQuestionById,
	...checkUsersExists,
	...getLogin,
	...getProfile,
];
