import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		status: 'idle',
		mediaStatus: 'idle',
		error: null,
		value: null,
	},
	reducers: {},
	extraReducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
