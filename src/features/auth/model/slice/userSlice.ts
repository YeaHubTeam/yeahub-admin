import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentUser } from '../types/auth';

export interface UserState {
	user: CurrentUser | null;
}

const initialState: UserState = {
	user: null,
};

const userSlice = createSlice({
	name: 'userData',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<CurrentUser>) {
			state.user = action.payload;
		},
	},
});

export const { reducer: userReducer, actions: userActions } = userSlice;
