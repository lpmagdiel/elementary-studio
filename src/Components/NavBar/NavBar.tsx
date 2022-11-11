import React, { FC } from 'react';
import styles from './styles/NavBar.module.css';
export interface NavBarInterface {}

export const NavBar : FC<NavBarInterface> = () => {
	return <div className={styles.navbar}>
		<div className='p-4'>
			<h1 className={styles.navbarTitle}>Elementary Studio</h1>
		</div>
		<div></div>
	</div >;
};