import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SpecializationsPageState } from '../types/specializationsPageTypes';

const initialState: SpecializationsPageState = {
	page: 1,
	selectedSpecializations: [],
};

const specializationsPageSlice = createSlice({
	name: 'specializationsPage',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setSelectedSpecializations: (state, action: PayloadAction<string[]>) => {
			state.selectedSpecializations = action.payload;
		},
	},
});

export const { reducer: specializationsPageReducer, actions: specializationsPageActions } =
	specializationsPageSlice;
