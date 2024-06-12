export const getToken = (): string | null => {
	return localStorage.getItem('accessToken');
};

export const setToken = (token: string): void => {
	localStorage.setItem('accessToken', token);
};

export const removeToken = (): void => {
	localStorage.removeItem('accessToken');
};
