import { Translations } from '@/shared/config/i18n/i18nTranslations';

interface CategoryCounts {
	[key: string]: number;
}

interface TranslationsProp {
	[key: string]: string;
}

export const categoryTitles: TranslationsProp = {
	'': Translations.CATEGORYSIDEBAR_MAIN,
	questions: Translations.CATEGORYSIDEBAR_QUESTIONS,
	verification: Translations.CATEGORYSIDEBAR_VERIFICATION,
	professions: Translations.CATEGORYSIDEBAR_PROFESSIONS,
	skills: Translations.CATEGORYSIDEBAR_SKILLS,
};

export const categoryCounts: CategoryCounts = {
	verification: 9,
	questions: 0,
	professions: 1,
	skills: 1,
};
