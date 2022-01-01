import styles from './navbar.module.scss';
import Link from 'next/link';
import { navigationType } from '../../../types';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
	const { pathname } = useRouter();
	const link: navigationType[] = [
		{ id: 1, title: 'Home', path: '/' },
		{ id: 2, title: 'About', path: '/about' },
		{ id: 3, title: 'Contacts', path: '/contacts' },
		{ id: 4, title: 'Counter', path: '/counter' },
		{ id: 5, title: 'Kanye', path: '/kanye' },
	];
	const getLink = (link: navigationType[]): ReactNode[] => {
		return link.map(i => (
			<Link href={i.path} key={i.id}>
				<a
					className={
						pathname === i.path ? `${styles.navbar__menu_item} ${styles.active}` : `${styles.navbar__menu_item}`
					}>
					{i.title}
				</a>
			</Link>
		));
	};

	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__menu}>{getLink(link)}</div>
		</div>
	);
};

export default Navbar;
