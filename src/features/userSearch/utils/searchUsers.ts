import { mockUsernames } from '../api/__mocks__/mockUsernames';

export const searchUsers = async (findUsername: string) => {
	if (!findUsername) {
		return;
	}
	const searchResults = mockUsernames.filter((user) =>
		user.username.toLowerCase().includes(findUsername.toLowerCase().trim()),
	);

	return searchResults;
};
