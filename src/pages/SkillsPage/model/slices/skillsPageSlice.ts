import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const skillsPageSlice = createSlice({
	name: 'skillsPage',
	initialState: {
		page: 1,
	},
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
	},
});

export const { reducer: skillsPageReducer, actions: skillsPageActions } = skillsPageSlice;
