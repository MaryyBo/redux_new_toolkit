import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames'; //cx
import CONSTANTS from '../../constants';
import { setTheme } from '../../store/slices/themeSlice';
import styles from './Header.module.scss';

const { THEMES } = CONSTANTS

const Header = (props) => {
    const theme = useSelector((state) => state.theme);

    const dispatch = useDispatch();

    const className = classNames(styles.header, {
        [styles.darkTheme]: theme === THEMES.DARK,
        [styles.lightTheme]: theme === THEMES.LIGHT
    })


    return (
        <header className={className}>
            <h1>My Site</h1>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>Link1</li>
                    <li className={styles.navListItem}>Link2</li>
                    <li className={styles.navListItem}>Link3</li>
                    <li className={styles.navListItem}>Link4</li>
                </ul>
            </nav>
            <div>
                <button onClick={() => dispatch(setTheme())}>Switch Theme</button>
            </div>
        </header>
    );
}


export default Header;
