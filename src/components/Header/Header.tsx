import React from 'react';
import styles from './header.module.scss'
import Navbar from '../Navbar/Navbar';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__logo}>
				<h1>MyLogo</h1>
			</div>
			<Navbar/>
		</div>
	);
};

export default Header;