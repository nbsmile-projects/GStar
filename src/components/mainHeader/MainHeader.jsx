import React from 'react';


import styles from './mainHeader.module.scss';

function MainHeader() {
    return (
        <div className={styles.mainHeader}>
            <div className={styles.content}>
                <h2 className={styles.tagline}>Велосипеды нового поколения</h2>
                <img src={`${process.env.PUBLIC_URL}/HLine.svg`} alt="line" />
                <h2 className={styles.quality}><i>Качество, скорость, дизайн.</i></h2>
                <a className={styles.button} href="#">Каталог</a>
            </div>
        </div>
    );
}

export default MainHeader;