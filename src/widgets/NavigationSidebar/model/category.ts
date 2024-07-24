interface CategoryCounts {
	[key: string]: number;
}

export const categoryTitles = {
	'': 'Главная',
	users: 'Пользователи',
	specializations: 'Специализация',
	skills: 'Навык',
	questions: 'Вопрос',
};

export const categoryCounts: CategoryCounts = {
	questions: 0,
	professions: 0,
	skills: 0,
};
