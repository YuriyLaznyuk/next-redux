import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
};

export type UserState = {
	loading: boolean;
	error: boolean;
	users: User[];
};
export const initialState: UserState = {
	loading: false,
	error: false,
	users: [],
};
export const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		loading: state => {
			state.loading = true;
		},
		success: (state, action: PayloadAction<User[]>) => {
			state.loading = false;
			state.users = action.payload;
		},
		error: state => {
			state.loading = false;
			state.error = true;
		},
		clear: state => {
			state.loading = false;
			state.error = false;
			state.users = [];
		},
	},
});
export const { success, loading, error, clear } = userSlice.actions;
export default userSlice.reducer;
