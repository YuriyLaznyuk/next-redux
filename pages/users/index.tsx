import React from 'react';
import styles from './users.module.scss';
import { useAppDispatch, useAppSelector } from '../../src/hooks/hooks';
import { fetchUsers, clearUser } from './usersLogic';

const Users = () => {
	const dispatch = useAppDispatch();
	const { users, error, loading } = useAppSelector(state => state.users);

	return (
		<div className={styles.users}>
			<button className={styles.users__btn} onClick={() => fetchUsers(dispatch)}>
				Show User
			</button>
			<button className={styles.users__btn} onClick={() => clearUser(dispatch)}>
				Clear User
			</button>
			<div className={styles.users__show}>
				{loading && <h3>...Loading</h3>}
				{error && <h3>Error loading</h3>}
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
