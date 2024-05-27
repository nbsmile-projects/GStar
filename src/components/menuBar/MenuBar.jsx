import { Link, NavLink } from 'react-router-dom';

import styles from './menuBar.module.scss';
import { Router } from 'react-router-dom/dist/umd/react-router-dom.development';
const MenuBar = () => {

    const activeLink = ({ isActive }) => isActive ? { color: "#e7ebed", textDecoration: " underline #e7ebed" } : { color: "#a9acae" };

    return (
        <div className={styles.menuBar}>
            <div className={styles.logo}>
                <NavLink to="/"><img width={300} src={`${process.env.PUBLIC_URL}/logos/Logo2light.svg`} alt="logo" /></NavLink>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li><NavLink style={activeLink} to="/">Главная</NavLink ></li>
                    <li><NavLink style={activeLink} to="/bicycles">Велосипеды</NavLink></li>
                    <li><NavLink style={activeLink} to="/bicycleParts">Велозапчасти</NavLink></li>
                    <li><NavLink style={activeLink} to="/bicycleAccs">Велоаксессуары</NavLink></li>
                    <li>Отзывы</li>
                    <li>O нас</li>
                    <li><NavLink style={activeLink} to="/bicycleService">Сервис</NavLink></li>
                </ul>
            </div>
            <div className={styles.barFooter}>
                <p className={styles.first}>RU</p>
                <p className={styles.second}>Поделиться</p>
            </div>
        </div>
    )
}

export default MenuBar;