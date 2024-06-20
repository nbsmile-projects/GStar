import { NavLink } from 'react-router-dom';

import styles from './menuBar.module.scss';

const MenuBar = ({ isMenuBarActive, setIsMenuBarActive }) => {

    const isMenuBarActiveClass = isMenuBarActive ? `${styles.menuBarActive}` : ' ';
    const isMenuBarWrapperActiveClass = isMenuBarActive ? `${styles.menuBarWrapperActive}` : ' ';
    const activeLink = ({ isActive }) => {
        if (isActive) {
            return {
                color: "#ffffff",
                fontSize: "29px",
                transform: "translateX(10px)"
            }
        } else {
            return {
                color: "#a9acae",
                fontSize: "26px",
                transition: "0.3s"
            }
        }
    };

    return (
        <div className={`${styles.menuBarWrapper} ${isMenuBarWrapperActiveClass}`} onClick={() => setIsMenuBarActive(false)} >
            <div className={`${styles.menuBar} ${isMenuBarActiveClass}`} onClick={e => e.stopPropagation()}>
                <img className={styles.closeBurgerIcon} src={`${process.env.PUBLIC_URL} /burger/hideBurger.svg`} onClick={() => setIsMenuBarActive(false)} alt="hideBurger" />
                <div className={styles.logo}>
                    <NavLink to="/"><img width={300} src={`${process.env.PUBLIC_URL} /logos/Logo2light.svg`} alt="logo" /></NavLink>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li><NavLink style={activeLink} to="/">Главная</NavLink ></li>
                        <li><NavLink style={activeLink} to="/bicycles">Велосипеды</NavLink></li>
                        <li><NavLink style={activeLink} to="/bicycle-parts">Велозапчасти</NavLink></li>
                        <li><NavLink style={activeLink} to="/bicycle-accs">Велоаксессуары</NavLink></li>
                        <li>Отзывы</li>
                        <li>O нас</li>
                        <li><NavLink style={activeLink} to="/bicycle-service">Сервис</NavLink></li>
                    </ul>
                </div>
                <div className={styles.barFooter}>
                    <p className={styles.first}>RU</p>
                    <p className={styles.second}>Поделиться</p>
                </div>
            </div>
        </div >
    )
}

export default MenuBar;