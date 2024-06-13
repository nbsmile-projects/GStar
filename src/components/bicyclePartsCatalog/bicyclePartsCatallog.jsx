import { useEffect, useState } from "react";
import CatalogFilter from "../catalogFilter/catalogFilter";

import styles from "./bicyclePartsCatalog.module.scss";

function BicyclePartsCatalog({ active, setActive, onItemSelected }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/bicycleParts')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])


    const renderBicyclesParts = data => {
        return data.map(item => {
            const { thumbnail, name, price } = item;
            return (
                <li li className={styles.item} >
                    <div
                        className={styles.card}
                        onClick={() => {
                            onItemSelected({
                                item: item,
                                type: 'bicyclePart'
                            });
                            setActive(true);
                        }}>
                        <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}${thumbnail.path}`} />
                        <p className={styles.itemName}>{name}</p>
                        <p className={styles.itemPrice}>{price}</p>
                    </div>
                    <a href="https://wa.me/+996702557299" className={styles.itemButton}>Купить</a>
                </li >
            )
        })
    }

    const bicyclePartsList = renderBicyclesParts(data);

    return (
        <div className={styles.bicycleParts}>
            <CatalogFilter />
            <div className={styles.bicyclePartsList}>
                {bicyclePartsList}
            </div>
        </ div >
    );
}

export default BicyclePartsCatalog;