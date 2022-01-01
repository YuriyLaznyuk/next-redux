import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CounterState = {
	value: number;
	secret: number;
};

const initialState: CounterState = {
	value: 0,
	secret: 1,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.value = state.value + 1;
			state.secret = state.secret + 2;
		},
		decrement: state => {
			state.value = state.value - 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value = state.value + action.payload;
		},
	},
});
export const { decrement, incrementByAmount, increment } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
