import React from 'react';
import styles from './header.module.scss';
import Navbar from '../Navbar/Navbar';
import { useAppSelector } from '../../hooks/hooks';

const Header = () => {
	const { value, secret } = useAppSelector(state => state.counter);
	console.log(value, secret);
	return (
		<div className={styles.header}>
			<div className={styles.header__logo}>
				<h1>MyLogo</h1>
			</div>
			<Navbar />
		</div>
	);
};

export default Header;
