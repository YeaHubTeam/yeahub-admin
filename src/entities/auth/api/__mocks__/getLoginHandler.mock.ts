import { http, HttpResponse } from 'msw';

import { mockGetLogin } from './mockGetLogin';

export const getLogin = [
	http.post('https://api.test.yeahub.ru/auth/login', () => HttpResponse.json(mockGetLogin)),
];
