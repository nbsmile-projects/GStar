import React from 'react';

import { Link } from 'react-router-dom';

import styles from './mainPage.module.scss';
import HLine from "../../../assets/icons/HLine.svg";

function MainPage() {
    return (
        <div className={styles.mainHeader}>
            <div className={styles.content}>
                <h2 className={styles.tagline}>Велосипеды нового поколения</h2>
                <img src={HLine} alt="line" />
                <h2 className={styles.quality}><i>Качество, скорость, дизайн.</i></h2>
                <Link className={styles.button} to={'/bicycles'}>Каталог</Link>
            </div>
        </div>
    );
}

export default MainPage;