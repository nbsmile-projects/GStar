import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { menuBarStatus } from "./menuBarSlice";

import styles from "./menuBar.module.scss";
import hideBurger from "../../assets/burger/hideBurger.svg";

const MenuBar = () => {
    const isMenuBarActive = useSelector(state => state.menuBar.isMenuBarActive);
    const dispatch = useDispatch();

    const isMenuBarActiveClass = isMenuBarActive ? `${styles.menuBarActive}` : ' ';
    const isMenuBarWrapperActiveClass = isMenuBarActive ? `${styles.menuBarWrapperActive}` : ' ';
    const isActiveLink = ({ isActive }) => {
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
        <div className={`${styles.menuBarWrapper} ${isMenuBarWrapperActiveClass}`} onClick={() => dispatch(menuBarStatus(false))} >
            <div className={`${styles.menuBar} ${isMenuBarActiveClass}`} onClick={e => e.stopPropagation()}>
                <img className={styles.closeBurgerIcon} src={hideBurger} onClick={() => dispatch(menuBarStatus(false))} alt="hideBurger" />
                <div className={styles.logo}>
                    <NavLink to="/"><img width={300} src={`${process.env.PUBLIC_URL}/Logo.svg`} alt="closeMenuIcon" /></NavLink>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li><NavLink style={isActiveLink} to="/">Главная</NavLink ></li>
                        <li><NavLink style={isActiveLink} to="/bicycles">Велосипеды</NavLink></li>
                        <li><NavLink style={isActiveLink} to="/bicycle-parts">Велозапчасти</NavLink></li>
                        <li><NavLink style={isActiveLink} to="/bicycle-accs">Велоаксессуары</NavLink></li>
                        <li>Отзывы</li>
                        <li>O нас</li>
                        <li><NavLink style={isActiveLink} to="/bicycle-service">Сервис</NavLink></li>
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