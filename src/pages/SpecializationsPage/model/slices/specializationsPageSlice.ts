import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const specializationsPageSlice = createSlice({
	name: 'specializationsPage',
	initialState: {
		page: 1,
	},
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
	},
});

export const { reducer: specializationsPageReducer, actions: specializationsPageActions } =
	specializationsPageSlice;
