import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../src/hooks/hooks';
import { increment, incrementByAmount, decrement } from '../../src/store/reducers/counterSlise';
import styles from './counter.module.scss';
const Counter = () => {
	const dispatch = useAppDispatch();
	const { value } = useAppSelector(state => state.counter);
	const [amount, setAmount] = useState<number>(0);
	return (
		<div className={styles.counter}>
			<h1>Page test redux toolkit next</h1>
			<h2 className={styles.counter__title}>current number {value}</h2>
			<input type='number' onChange={e => setAmount(Number(e.target.value))} value={amount} />
			<div className={styles.counter__button}>
				<button className={styles.counter__button_btn} onClick={() => dispatch(increment())}>
					Increment
				</button>
				<button className={styles.counter__button_btn} onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<button className={styles.counter__button_btn} onClick={() => dispatch(incrementByAmount(amount))}>
					AddAmount
				</button>
			</div>
		</div>
	);
};

export default Counter;
