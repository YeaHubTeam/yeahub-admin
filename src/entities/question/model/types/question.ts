export type QuestionType = 'task' | 'question' | 'test';

export interface QuestionTestOption {
	id: number;
	answer: string;
}

export interface Question {
	id: string;
	title: string;
	description: string;
	imgSrc?: string;
	keywords?: string[];
	shortAnswer?: string;
	status?: string;
	rate: number;
	longAnswer?: string;
	resources?: string[];
	author?: string;
	type?: QuestionType;
	criteria?: string;
	options?: QuestionTestOption[];
	correctOptionId?: number;
	explanation?: string;
	time?: string;
}

export interface QuestionsListParams {
	page?: number;
}
