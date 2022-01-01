import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../store/reducers/counterSlise';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
