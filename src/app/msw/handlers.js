import { questionsDetailResponse } from '@/entities/question/__mocks__/questionsDetailResponse';
import { questionsResponse } from '@/entities/question/__mocks__/questionsResponse';
import { avatarResponse } from '@/entities/userAvatar/__mocks__/avatarResponse';

export const handlers = [...questionsResponse, ...questionsDetailResponse, ...avatarResponse];
