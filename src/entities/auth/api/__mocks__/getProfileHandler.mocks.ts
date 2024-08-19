import { http, HttpResponse } from 'msw';

import { mockGetProfile } from './mockGetProfile';

export const getProfile = [
	http.get('https://api.test.yeahub.ru/auth/profile', () => HttpResponse.json(mockGetProfile)),
];
