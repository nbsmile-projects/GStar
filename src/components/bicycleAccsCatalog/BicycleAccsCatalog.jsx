import { useEffect, useState } from "react";
import CatalogFilter from "../catalogFilter/catalogFilter";

import styles from "./bicycleAccsCatalog.module.scss";

const BicycleAccsCatalog = ({ active, setActive, onItemSelected }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/bicycleAccs')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    const renderBicycleAccs = data => {
        return data.map(item => {
            const { thumbnail, name, price } = item;
            return (
                <li className={styles.item} >
                    <div
                        className={styles.card}
                        onClick={() => {
                            onItemSelected({
                                item: item,
                                type: 'bicycleAccs'
                            });
                            setActive(true);
                        }}>
                        <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}${thumbnail.path}`} />
                        <p className={styles.itemName}>{name}</p>
                        <p className={styles.itemPrice}>{price}</p>
                    </div>
                    <a href="https://wa.me/+996702557299" className={styles.itemButton}>Купить</a>
                </li>
            )
        })
    }

    const bicycleAccsList = renderBicycleAccs(data);

    return (
        <div className={styles.bicycleAccs}>
            <CatalogFilter />
            <div className={styles.bicycleAccsList}>
                {bicycleAccsList}
            </div>
        </ div >
    );
}

export default BicycleAccsCatalog;