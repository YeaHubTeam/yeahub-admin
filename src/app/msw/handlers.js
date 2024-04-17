import { getQuestionsList, getQuestionById } from '@/entities/question';

import { getUserAvatarById } from '@/features/userAvatar';
import { checkUsersExists } from '@/features/userSearch';
7;

export const handlers = [
	...getQuestionsList,
	...getQuestionById,
	...checkUsersExists,
	...getUserAvatarById,
];
