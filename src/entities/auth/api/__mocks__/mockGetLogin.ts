interface mockGetLoginType {
	id: string;
	firstName: string;
	lastName: string;
	phone: string;
	country: string;
	city: string;
	email: string;
	birthday: string;
	address: string;
	avatarUrl: string;
	createdAt: string;
	updatedAt: string;
	refreshToken: string;
	userRoles: [];
	profiles: [
		{
			profileId: string;
			specializationId: number;
		},
	];
}

export const mockGetLogin: mockGetLoginType[] = [
	{
		id: '1e2ac9b6-c87d-4c9f-8a80-82f5fbbf2a1d',
		firstName: 'Guse',
		lastName: 'Kazulin',
		phone: '+1234567890',
		country: 'AGroba',
		city: 'Bag-dad',
		email: 'user@example.com',
		birthday: '1990-01-01T00:00:00.000Z',
		address: 'улица Пушкина дом Колотушкина',
		avatarUrl: 'https://cdn.fastcup.net/logos/teams/20989_7n1la213o.png',
		createdAt: '2024-05-19T13:38:35.481Z',
		updatedAt: '2024-08-16T13:46:14.315Z',
		refreshToken:
			'$argon2id$v=19$m=65536,t=3,p=4$gwJhVNRb+WGPJ+5leg9q8g$EfJZ3IKuibrNDs6goajfksTFU6Y2z9iz0W2HYzkdMIg',
		userRoles: [],
		profiles: [
			{
				profileId: '03499949-5ba6-44fd-8600-3edd5cf88f68',
				specializationId: 1,
			},
		],
	},
];
