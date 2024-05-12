import CatalogFilter from "../catalogFilter/catalogFilter";

import styles from "./bicycleCatalog.module.scss";

function BicycleCatalog() {

    return (
        <div className={styles.bicycles}>
            <CatalogFilter />
            <div className={styles.bicycleList}>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                    <p className={styles.itemName}>Велосипед Giant Talon 2 - 2022 (phantom green)</p>
                    <p className={styles.itemPrice}>79 995 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
            </div>
        </ div >
    );
}

export default BicycleCatalog;