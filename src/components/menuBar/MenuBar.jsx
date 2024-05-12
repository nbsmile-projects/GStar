

import styles from './menuBar.module.scss';
const MenuBar = () => {

    return (
        <div className={styles.menuBar}>
            <div className={styles.logo}>
                <a href="#"><img width={300} src={`${process.env.PUBLIC_URL}/logos/Logo2light.svg`} alt="logo" /></a>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>Главная</li>
                    <li>Велосипеды</li>
                    <li>Велозапчасти</li>
                    <li>Велоаксессуары</li>
                    <li>Отзывы</li>
                    <li>О нас</li>
                    <li>Сервис</li>
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