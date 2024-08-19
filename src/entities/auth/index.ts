export type { AuthState } from './model/slice/authSlice';
export { authReducer } from '../../entities/auth/model/slice/authSlice';
export { authActions } from '../../entities/auth/model/slice/authSlice';
export { Avatar } from './ui/Avatar/Avatar';
export { useFetchUserMutation } from './api/authApi';
export { selectIsAuthenticated } from './model/selectors/authSelectors';
export { getLogin } from './api/__mocks__/getLoginHandler.mock';
export { getProfile } from './api/__mocks__/getProfileHandler.mocks';
