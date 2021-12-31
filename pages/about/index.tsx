import React from 'react';
import Head from 'next/head';
import styles from './about.module.scss';

const About = () => {
	return (
		<>
			<Head>
				<title>about</title>
			</Head>
			<div className={styles.about}>
				<h1>About</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto commodi, cumque distinctio est impedit
					incidunt maiores nam nostrum omnis optio placeat praesentium, provident, quaerat sed sit tempora totam vel.
				</p>
			</div>
		</>
	);
};

export default About;
