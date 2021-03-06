import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../src/hooks/hooks';
import { increment, incrementByAmount, decrement } from '../../src/store/reducers/counterSlise';
import styles from './counter.module.scss';

interface IStatus {
	effect: boolean;
	flag: boolean;
}

const Counter = () => {
	const dispatch = useAppDispatch();
	const { value } = useAppSelector(state => state.counter);
	const [amount, setAmount] = useState<number>(0);
	const [flag, setFlag] = useState<IStatus>({ flag: false, effect: false });
	console.log('port ', process.env.PORT);
	const vercel = 'https://vercel-express-rosy.vercel.app/api/file';
	useEffect(() => {
		const myFetch = async () => {
			if (typeof window !== 'undefined') {
				const host: string = window?.location.origin;
				console.log('host', host);

				const response = await fetch(`${vercel}`);

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
		if (flag.effect) {
			myFetch();
		}
	}, [flag.flag]);

	return (
		<div className={styles.counter}>
			{/*<h1>{user}</h1>*/}
			<button onClick={() => setFlag({ ...flag, flag: !flag.flag, effect: true })}>MyFETCH</button>
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
