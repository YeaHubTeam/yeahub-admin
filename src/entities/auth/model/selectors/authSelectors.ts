import { State } from '@/shared/config/store/State';

export const selectUserProfile = (state: State) => state.auth.profile;
export const selectIsAuthenticated = (state: State) => state.auth.isAuth;
