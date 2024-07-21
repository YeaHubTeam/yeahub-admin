interface CategoryCounts {
	[key: string]: number;
}

export const categoryTitles = {
	'': 'Главная',
	users: 'Пользователи',
	specializations: 'Специализация',
	verification: 'Верификация',
	skills: 'Навык',
	questions: 'Вопрос',
};

export const categoryCounts: CategoryCounts = {
	verification: 9,
	questions: 0,
	professions: 1,
	skills: 1,
};
