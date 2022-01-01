import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type KanyeState = {
	data: {
		quote: string;
	};
	pending: boolean;
	error: boolean;
};

export const fetchKanye = createAsyncThunk('kanye/fetchKanye', async () => {
	const response = await axios.get('https://api.kanye.rest/');
	return response.data;
});

const initialState: KanyeState = {
	data: { quote: 'Initial KanyeState' },
	error: false,
	pending: false,
};

export const kanyeSlice = createSlice({
	name: 'kanye',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchKanye.pending, state => {
				state.pending = true;
			})
			.addCase(fetchKanye.fulfilled, (state, { payload }) => {
				state.pending = false;
				state.data = payload;
			})
			.addCase(fetchKanye.rejected, state => {
				state.error = true;
				state.pending = false;
			});
	},
});
export const selectKanye = (state: RootState) => state.kanye;
export default kanyeSlice.reducer;
