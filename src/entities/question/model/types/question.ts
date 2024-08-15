export type QuestionType = 'task' | 'question' | 'test';

export interface QuestionTestOption {
	id: number;
	answer: string;
}
export interface QuestionSkill {
	id: string;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
}

export interface Question {
	complexity: number;
	createdBy?: string | undefined;
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
	questionSkills?: QuestionSkill[];
}

export interface QuestionsListParams {
	page?: number;
	title?: string;
}
