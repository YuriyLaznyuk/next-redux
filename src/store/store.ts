import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../store/reducers/counterSlise';
import kanyeReducer from '../store/reducers/kanyeSlace';
import usersReducer from '../store/reducers/usersSlise';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		kanye: kanyeReducer,
		users: usersReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
