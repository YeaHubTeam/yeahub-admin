import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LogoutState {
	isAuthenticated: boolean;
}

const initialState: LogoutState = {
	isAuthenticated: !!localStorage.getItem('accessToken'),
};

const logoutSlice = createSlice({
	name: 'logout',
	initialState,
	reducers: {
		setAuthentication(state, action: PayloadAction<boolean>) {
			state.isAuthenticated = action.payload;
		},
	},
});

export const { reducer: logoutReducer, actions: logoutActions } = logoutSlice;
