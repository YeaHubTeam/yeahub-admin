import { questionsDetailResponse } from '@/entities/question/__mocks__/questionsDetailResponse';
import { questionsResponse } from '@/entities/question/__mocks__/questionsResponse';
import { avatarResponse } from '@/entities/userAvatar/__mocks__/avatarResponse';
import { userSearch } from '@/entities/userSearch/__mocks__/userSearch';

export const handlers = [
	...questionsResponse,
	...questionsDetailResponse,
	...avatarResponse,
	...userSearch,
];
