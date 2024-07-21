import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SkillsPageState } from '../types/skillsPageTypes';

const initialState: SkillsPageState = {
	page: 1,
	selectedSkills: [],
};

const skillsPageSlice = createSlice({
	name: 'skillsPage',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setSelectedSkills: (state, action: PayloadAction<string[]>) => {
			state.selectedSkills = action.payload;
		},
	},
});

export const { reducer: skillsPageReducer, actions: skillsPageActions } = skillsPageSlice;
