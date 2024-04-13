import { questionsDetailResponse } from '../../pages/QuestionDetailPage/__mocks__/questionsDetailResponse';
import { questionsResponse } from '../../pages/QuestionsPage/__mocks__/questionsResponse';
import { avatarResponse } from '../../shared/ui/UserProfileWrap/__mocks__/avatarResponse';

export const handlers = [...questionsResponse, ...questionsDetailResponse, ...avatarResponse];
