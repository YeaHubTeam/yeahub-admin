export type QuestionType = 'task' | 'question' | 'test';

export interface QuestionTestOption {
	id: number;
	answer: string;
}

export interface Question {
	id: string;
	title: string;
	description: string;
	rate: number;
	imgSrc?: string;
	keywords?: string[];
	resources?: string[];
	author?: string;
	type?: QuestionType;
	criteria?: string;
	longAnswer?: string;
	shortAnswer?: string;
	options?: QuestionTestOption[];
	correctOptionId?: number;
	explanation?: string;
	time?: string;
}
