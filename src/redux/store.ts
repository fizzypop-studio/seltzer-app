import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user/userSlice';
import navigationReducer from './slices/navigation/navigationSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		navigation: navigationReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
