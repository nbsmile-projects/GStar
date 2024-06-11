import { useEffect, useState } from "react";

import CatalogFilter from "../catalogFilter/catalogFilter";

import styles from "./bicycleCatalog.module.scss";

function BicycleCatalog({ active, setActive, onItemSelected }) {
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
                    <div className={styles.card} onClick={() => {
                        onItemSelected({
                            item: item,
                            type: 'bicycle'
                        });
                        setActive(true);
                    }}>
                        <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}${item.thumbnail.path}`} />
                        <p className={styles.itemName}>{item.name}</p>
                        <p className={styles.itemPrice}>{item.price}</p>
                    </div>
                    <a href="https://wa.me/+996702557299" className={styles.itemButton}>Купить</a>
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