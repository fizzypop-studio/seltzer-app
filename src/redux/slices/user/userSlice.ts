import { createSlice } from '@reduxjs/toolkit';

const user = {
	id: '123456',
	firstName: 'Seth',
	lasName: 'Carrino',
	email: 'sethcarrino@gmail.com',
};

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		status: 'idle',
		mediaStatus: 'idle',
		error: null,
		value: user,
	},
	reducers: {},
	extraReducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
