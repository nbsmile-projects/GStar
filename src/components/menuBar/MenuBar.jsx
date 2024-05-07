

import styles from './menuBar.module.scss';
const MenuBar = () => {

    return (
        <div className={styles.menuBar}>
            <div className={styles.logo}>
                <a href="#"><img width={300} src={`${process.env.PUBLIC_URL}/lightLogo.png`} alt="logo" /></a>
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>Велосипеды</li>
                    <li>Велозапчасти</li>
                    <li>Велоаксессуары</li>
                    <li>Отзывы</li>
                    <li>О нас</li>
                    <li>Сервис</li>
                </ul>
            </div>
            <div className={styles.barFooter}>
                <p>RU</p>
                <p>Поделиться</p>
            </div>
        </div>
    )
}

export default MenuBar;