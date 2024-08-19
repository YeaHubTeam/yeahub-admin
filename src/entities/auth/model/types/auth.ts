export interface Profiles {
	profileId: string;
	specializationId: number;
}
export interface CurrentUser {
	id: string;
	firstName: string;
	lastName: string;
	password?: string;
	phone: string;
	email: string;
	country: string;
	city: string;
	birthday: string;
	address: string;
	avatarUrl: string;
	profiles?: Profiles[];
	createdAt?: string;
	updatedAt?: string;
	userRoles?: unknown[];
	refreshToken?: string;
}

export interface LoginInput {
	username: string;
	password: string;
}

export interface AuthResult {
	access_token: string;
	refresh_token?: string;
	user: CurrentUser;
}
