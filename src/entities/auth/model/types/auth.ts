export interface CurrentUser {
	firstName: string;
	lastName: string;
	password: string;
	phone: string;
	email: string;
	country: string;
	city: string;
	birthday: string;
	address: string;
	avatarUrl: string;
}

export interface LoginInput {
	username: string;
	password: string;
}

export interface AuthResult {
	access_token: string;
	refresh_token: string;
}
