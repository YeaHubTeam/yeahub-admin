import { http, HttpResponse } from 'msw';

export const getUserAvatarById = [
	http.get('/images/:imageUrl', async ({ params }: { params: { imageUrl: string } }) => {
		const imageUrl: string = params.imageUrl;

		const buffer: ArrayBuffer = await fetch(`/assets/${imageUrl}.png`).then((response) =>
			response.arrayBuffer(),
		);

		return HttpResponse.arrayBuffer(buffer, {
			headers: {
				'Content-Type': 'image/jpeg',
			},
			status: 222,
			statusText: "it's OK",
		});
	}),
];
