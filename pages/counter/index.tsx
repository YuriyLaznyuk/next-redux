import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../src/hooks/hooks';
import { increment, incrementByAmount, decrement } from '../../src/store/reducers/counterSlise';
import styles from './counter.module.scss';
const Counter = () => {
	const dispatch = useAppDispatch();
	const { value } = useAppSelector(state => state.counter);
	const [amount, setAmount] = useState<number>(0);
	const [flag, setFlag] = useState<boolean>(false);

	useEffect(() => {
		const myFetch = async () => {
			if (typeof window !== 'undefined') {
				const host: string = window?.location.origin;
				const response = await fetch(`${host}/api/user`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json; charset=utf-8' },
				});
				const blob = await response.blob();
				const file = await window.URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = file;
				link.download = 'YuriyL_12.pdf';
				document.body.appendChild(link);
				link.click();
				link.remove();
				// setUser(json.name);
			}
		};
		myFetch();
	}, [flag]);

	return (
		<div className={styles.counter}>
			{/*<h1>{user}</h1>*/}
			<button onClick={() => setFlag(!flag)}>MyFETCH</button>
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
