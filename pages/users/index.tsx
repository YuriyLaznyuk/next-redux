import React from 'react';
import styles from './users.module.scss';
import { useAppDispatch, useAppSelector } from '../../src/hooks/hooks';
import { error, loading, success, clear } from '../../src/store/reducers/usersSlise';
import axios from 'axios';
// import { fetchUsers, clearUser } from './usersLogic';

const Users = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector(state => state.users);
	const fetchUsers = async () => {
		try {
			dispatch(loading());
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			dispatch(success(response.data));
		} catch {
			dispatch(error());
		}
	};
	return (
		<div className={styles.users}>
			<button className={styles.users__btn} onClick={() => fetchUsers()}>
				Show User
			</button>
			<button className={styles.users__btn} onClick={() => dispatch(clear())}>
				Clear User
			</button>
			<div className={styles.users__show}>
				{data.loading && <h3>...Loading</h3>}
				{data.error && <h3>Error loading</h3>}
				{data.users.length > 0 &&
					data.users.map(i => (
						<div className={styles.users__show_item} key={i.id}>
							{i.name}--{i.email}--{i.address.city}
						</div>
					))}
			</div>
		</div>
	);
};

export default Users;
