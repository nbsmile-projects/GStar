import { useEffect, useState } from "react";

import CatalogFilter from "../catalogFilter/catalogFilter";

import styles from "./bicycleCatalog.module.scss";

function BicycleCatalog({ active, setActive }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/bicycles')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    const renderBicycles = data => {
        return data.map(item => {
            return (
                <li className={styles.item} key={item.id}>
                    <div className={styles.card} onClick={() => setActive(true)}>
                        <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}/bicycle.png`} />
                        <p className={styles.itemName}>{item.name}</p>
                        <p className={styles.itemPrice}>{item.price}</p>
                    </div>
                    <button className={styles.itemButton}>Купить</button>
                </li>
            )
        })
    }

    const bicycleList = renderBicycles(data);

    return (
        <div className={styles.bicycles}>
            <CatalogFilter />
            <div className={styles.bicycleList}>
                {bicycleList}
            </div>
        </ div >
    );
}

export default BicycleCatalog;