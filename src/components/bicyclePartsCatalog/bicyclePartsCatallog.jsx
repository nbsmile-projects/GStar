import CatalogFilter from "../catalogFilter/catalogFilter";

import styles from "./bicyclePartsCatalog.module.scss";

function BicyclePartsCatalog() {

    return (
        <div className={styles.bicycleParts}>
            <CatalogFilter />
            <div className={styles.bicyclePartsList}>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleParts/zvezda.png`} />
                    <p className={styles.itemName}>Звезда шатунов Shimano FC-M675 SLX 26 зубьев, AK</p>
                    <p className={styles.itemPrice}>573 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleParts/pedali.png`} />
                    <p className={styles.itemName}>Педали для велосипеда Wellgo LU-C27G</p>
                    <p className={styles.itemPrice}>360 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleParts/kamera.png`} />
                    <p className={styles.itemName}>Камера для велосипеда на 27.5 *3.0</p>
                    <p className={styles.itemPrice}>150 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleParts/kamera.png`} />
                    <p className={styles.itemName}>Камера для велосипеда на 27.5 *3.0</p>
                    <p className={styles.itemPrice}>150 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleParts/zvezda.png`} />
                    <p className={styles.itemName}>Звезда шатунов Shimano FC-M675 SLX 26 зубьев, AK</p>
                    <p className={styles.itemPrice}>573 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleParts/pedali.png`} />
                    <p className={styles.itemName}>Педали для велосипеда Wellgo LU-C27G</p>
                    <p className={styles.itemPrice}>360 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleParts/zvezda.png`} />
                    <p className={styles.itemName}>Звезда шатунов Shimano FC-M675 SLX 26 зубьев, AK</p>
                    <p className={styles.itemPrice}>573 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleParts/kamera.png`} />
                    <p className={styles.itemName}>Камера для велосипеда на 27.5 *3.0</p>
                    <p className={styles.itemPrice}>150 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
                <li className={styles.item} >
                    <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycleParts/pedali.png`} />
                    <p className={styles.itemName}>Педали для велосипеда Wellgo LU-C27G</p>
                    <p className={styles.itemPrice}>360 сом</p>
                    <button className={styles.itemButton}>Купить</button>
                </li>
            </div>
        </ div >
    );
}

export default BicyclePartsCatalog;