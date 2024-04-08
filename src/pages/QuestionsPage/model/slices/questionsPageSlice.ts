import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const questionsPageSlice = createSlice({
	name: 'questionsPage',
	initialState: {
		page: 1,
	},
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
	},
});

export const { reducer: questionsPageReducer, actions: questionsPageActions } = questionsPageSlice;
