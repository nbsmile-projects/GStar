import CatalogFilter from "../catalogFilter/catalogFilter";

import styles from "./bicycleAccsCatalog.module.scss";

function BicycleAccsCatalog() {

    return (
        <div className={styles.bicycleAccs}>
            <CatalogFilter />
            <div className={styles.bicycleAccsList}>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleAccs/zamok.png`} />
                    <p className={styles.itemName}>Замок тросовый ЗУБР 1000 мм, 18 мм, цинковый сплав, усиленный</p>
                    <p className={styles.itemPrice}>950 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleAccs/flaga.png`} />
                    <p className={styles.itemName}>SKS фляга Drinkinkg bottle Team Germany - 750ml, transparent</p>
                    <p className={styles.itemPrice}>250 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleAccs/derzhatelflagi.png`} />
                    <p className={styles.itemName}>Liv держатель для фляги на велосипеды, Proway, черный цвет</p>
                    <p className={styles.itemPrice}>450 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleAccs/flaga.png`} />
                    <p className={styles.itemName}>SKS фляга Drinkinkg bottle Team Germany - 750ml, transparent</p>
                    <p className={styles.itemPrice}>250 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleAccs/zamok.png`} />
                    <p className={styles.itemName}>Замок тросовый ЗУБР 1000 мм, 18 мм, цинковый сплав, усиленный</p>
                    <p className={styles.itemPrice}>950 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleAccs/derzhatelflagi.png`} />
                    <p className={styles.itemName}>Liv держатель для фляги на велосипеды, Proway, черный цвет</p>
                    <p className={styles.itemPrice}>450 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleAccs/derzhatelflagi.png`} />
                    <p className={styles.itemName}>Liv держатель для фляги на велосипеды, Proway, черный цвет</p>
                    <p className={styles.itemPrice}>450 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleAccs/zamok.png`} />
                    <p className={styles.itemName}>Замок тросовый ЗУБР 1000 мм, 18 мм, цинковый сплав, усиленный</p>
                    <p className={styles.itemPrice}>950 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleAccs/flaga.png`} />
                    <p className={styles.itemName}>SKS фляга Drinkinkg bottle Team Germany - 750ml, transparent</p>
                    <p className={styles.itemPrice}>250 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
            </div>
        </ div >
    );
}

export default BicycleAccsCatalog;