import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import userReducer from './slices/user/userSlice';
import navigationReducer from './slices/navigation/navigationSlice';
import sessionReducer from './slices/sessions/sessionSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		navigation: navigationReducer,
		session: sessionReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
