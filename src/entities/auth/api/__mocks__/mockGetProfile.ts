interface mockGetProfileType {
	id: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	country: string;
	city: string;
	address: string;
	avatarUrl: string;
	refreshToken: string | null;
	birthday: string;
	updatedAt: string;
	createdAt: string;
	profiles: [];
}

export const mockGetProfile: mockGetProfileType[] = [
	{
		id: '121-123',
		firstName: 'John',
		lastName: 'Doe',
		phone: '+1234567890',
		email: 'john.doe@example.com',
		country: 'USA',
		city: 'New York',
		address: '123 Main St',
		avatarUrl: 'http://example.com/avatar.jpg',
		refreshToken: null,
		birthday: '1999-02-27T07:51:27.826Z',
		updatedAt: '2024-02-27T07:51:27.826Z',
		createdAt: '2024-02-20T07:51:27.826Z',
		profiles: [],
	},
];
