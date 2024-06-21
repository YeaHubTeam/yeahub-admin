import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentUser } from '../types/auth';

export interface AuthState {
	isAuth: boolean;
	profile: CurrentUser | null;
}

const initialState: AuthState = {
	isAuth: false,
	profile: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setProfile(state, action: PayloadAction<CurrentUser>) {
			state.profile = action.payload;
		},
		setAuthentication(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload;
		},
	},
});

export const { reducer: authReducer, actions: authActions } = authSlice;
