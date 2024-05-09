export interface Skill {
	id: string;
	title: string;
	description: string;
	avatarSrc: string;
	createdAt: string;
	updatedAt: string;
}

export type SkillFormValues = Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>;
