import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import styles from './layout.module.scss'
import Header from '../Header/Header';

type layoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: layoutProps) => {
	return (
		<>
			<div className={styles.layout}>
				<Header />
				<main>{children}</main>
			</div>

			<Footer />
		</>
	);
};

export default Layout;
