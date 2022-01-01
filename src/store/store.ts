import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../store/reducers/counterSlise';
import kanyeReducer from '../store/reducers/kanyeSlace';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		kanye: kanyeReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
