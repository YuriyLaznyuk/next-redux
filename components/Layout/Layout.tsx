import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

type layoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: layoutProps) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
