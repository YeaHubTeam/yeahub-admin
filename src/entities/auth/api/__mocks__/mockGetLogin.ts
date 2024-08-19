import { AuthResult } from '../../model/types/auth';

export const mockGetLogin: AuthResult[] = [
	{
		access_token:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxQGV4YW1wbGUuY29tIiwic3ViIjoiOTBiMjRhZGEtYjM5OC00MzYzLWI2YjItNjkyMWQ0ZTM0MGEwIiwiaWF0IjoxNzIzOTc5MjkzLCJleHAiOjE3MjQwNjU2OTN9.1HA1Ko-PXWgD0pQrsqHCjmnPVjQ4jrrOznWR0W1Ir-M',
		user: {
			id: '90b24ada-b398-4363-b6b2-6921d4e340a0',
			firstName: 'John1',
			lastName: 'Doe2',
			phone: '+1234567810',
			email: 'user1@example.com',
			country: 'USA',
			city: 'New York',
			birthday: 'null',
			address: '123 Main St',
			avatarUrl: 'null',
			password: '',
		},
	},
];
