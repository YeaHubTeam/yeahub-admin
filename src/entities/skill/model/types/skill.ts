export interface Skill {
	id: string;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
}

export type SkillFormValues = Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>;
