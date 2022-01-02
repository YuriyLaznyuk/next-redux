import { AppDispatch } from '../../src/store/store';
import axios from 'axios';
import { loading, error, success, clear } from '../../src/store/reducers/usersSlise';

export const fetchUsers = async (dispatch: AppDispatch) => {
	try {
		dispatch(loading());
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		dispatch(success(response.data));
	} catch {
		dispatch(error());
	}
};
export const clearUser = (dispatch: AppDispatch) => dispatch(clear());
