import React from 'react';
import styles from './users.module.scss';
import { useAppDispatch, useAppSelector } from '../../src/hooks/hooks';
import axios from 'axios';
import { loading, success, error, clear } from '../../src/store/reducers/usersSlise';

const Users = () => {
	const dispatch = useAppDispatch();
	const { users } = useAppSelector(state => state.users);
	const fetchUsers = async () => {
		try {
			dispatch(loading());
			const response = await axios.get('https://jsonplaceholder.typicode.com/users');
			dispatch(success(response.data));
		} catch (e) {
			console.log(e);
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
				{users.length > 0 &&
					users.map(i => (
						<div className={styles.users__show_item} key={i.id}>
							{i.name}--{i.email}--{i.address.city}
						</div>
					))}
			</div>
		</div>
	);
};

export default Users;
