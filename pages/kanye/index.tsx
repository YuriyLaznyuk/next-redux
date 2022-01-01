import React from 'react';
import styles from './kanye.module.scss';
import { useAppDispatch, useAppSelector } from '../../src/hooks/hooks';
import { fetchKanye } from '../../src/store/reducers/kanyeSlace';
const Kanye = () => {
	const { error, data, pending } = useAppSelector(state => state.kanye);
	const dispatch = useAppDispatch();
	return (
		<div className={styles.kanye}>
			<div className={styles.kanye__show}>
				{pending && <p>...Loading</p>}
				{error && <p>Error Loading </p>}
				{data && <p>{data.quote}</p>}
			</div>
			<button onClick={() => dispatch(fetchKanye())}>Generate Kanye Quite</button>
		</div>
	);
};

export default Kanye;
