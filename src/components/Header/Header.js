import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>My counter</h1>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>Link1</li>
                    <li className={styles.navListItem}>Link2</li>
                    <li className={styles.navListItem}>Link3</li>
                    <li className={styles.navListItem}>Link4</li>
                </ul>
            </nav>
            <div>
                <button>Switch Theme</button>
            </div>
        </header>
    );
}

export default Header;
