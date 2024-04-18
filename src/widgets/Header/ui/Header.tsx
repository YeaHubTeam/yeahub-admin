import { FC } from 'react';

import { UserProfileWrap } from '@/shared/ui/UserProfileWrap';

import { ColorSchemeSwitcher } from '@/features/colorScheme';
import { SearchInput } from '@/features/SearchInput';
import { useCheckUsersExistsMutation } from '@/features/userSearch';

import styles from './Header.module.css';

export const Header: FC = () => {
	const [searchUsers, { data, error }] = useCheckUsersExistsMutation();

	const handleSearch = (query: string) => {
		searchUsers({ username: query });
	};

	const names =
		data && data.searchResults
			? data.searchResults.map((result: { username: string }) => result.username)
			: [];

	return (
		<header className={styles.header} style={{ position: 'relative' }}>
			<SearchInput onSearch={handleSearch} placeholder={'Найти человека, мероприятие...'} />
			{data && (
				<div>
					{data.searchResults.length > 0 ? (
						<div
							style={{
								position: 'absolute',
								top: '80px',
								left: '120px',
								background: 'gold',
								padding: '5px',
								display: 'flex',
								flexDirection: 'column',
								zIndex: '1',
							}}
						>
							<ul>
								Найдены пользователи:
								{names.map((item: string, index: number) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					) : (
						<p
							style={{
								position: 'absolute',
								top: '40px',
								left: '86px',
								background: 'gold',
								padding: '5px',
								zIndex: '1',
							}}
						>
							Пользователи не найдены
						</p>
					)}
				</div>
			)}
			{error && <p>Произошла ошибка при поиске пользователей:</p>}
			<div style={{ transform: 'translateX(0)' }}>
				<ColorSchemeSwitcher />
			</div>
			<UserProfileWrap />
		</header>
	);
};
