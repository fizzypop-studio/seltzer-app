import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user/userSlice';

export default configureStore({
	reducer: {
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
