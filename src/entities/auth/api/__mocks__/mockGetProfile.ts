import { CurrentUser } from '../../model/types/auth';

export const mockGetProfile: CurrentUser[] = [
	{
		id: '90b24ada-b398-4363-b6b2-6921d4e340a0',
		firstName: 'John1',
		lastName: 'Doe2',
		phone: '+1234567810',
		country: 'USA',
		city: 'New York',
		email: 'user1@example.com',
		birthday: 'null',
		address: '123 Main St',
		avatarUrl: 'null',
		createdAt: '2024-07-13T06:17:42.786Z',
		updatedAt: '2024-08-18T11:24:03.783Z',
		refreshToken:
			'$argon2id$v=19$m=65536,t=3,p=4$jtdsLF4ZMPTOyZi6qW3Khg$Jcx8nO+Pxr9QRygGbFZYiKqDT7M/y+r2gJLm1/Yh5ws',
		userRoles: [],
		profiles: [
			{
				profileId: 'a7b9eab1-f37d-4f10-9cd2-ebb3d8279ac0',
				specializationId: 0,
			},
		],
	},
];
