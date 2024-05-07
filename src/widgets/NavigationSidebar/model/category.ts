interface CategoryCounts {
	[key: string]: number;
}

export const categoryTitles = {
	'': 'Главная',
	questions: 'Вопросы',
	verification: 'Верификации',
	specializations: 'Специализация',
	skills: 'Навыки',
};

export const categoryCounts: CategoryCounts = {
	verification: 9,
	questions: 0,
	professions: 1,
	skills: 1,
};
