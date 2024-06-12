import { getQuestionsList, getQuestionById } from '@/entities/question';

import { checkUsersExists } from '@/features/userSearch';
7;

export const handlers = [...getQuestionsList, ...getQuestionById, ...checkUsersExists];
