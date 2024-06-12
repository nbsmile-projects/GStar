import { useEffect, useState } from "react";

import CatalogFilter from "../catalogFilter/catalogFilter";

import styles from "./bicycleCatalog.module.scss";

function BicycleCatalog({ active, setActive, onItemSelected }) {
    const [initialData, setInitialData] = useState([]);
    const [listOfBicycles, setListOfBicycles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/bicycles')
            .then(response => response.json())
            .then(data => setInitialData(data))
    }, []);

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const searchedData = searchItem(initialData, searchTerm);
            setListOfBicycles(searchedData);
        }, 300);

        return () => clearTimeout(Debounce);
    }, [searchTerm]);

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

    const searchItem = (listOfItems, searchText) => {
        if (!searchText) {
            return listOfItems;
        }
        return listOfItems.filter(item => {
            return item.name.toLowerCase().includes(searchText.toLowerCase());
        })
    }

    const bicycleList = listOfBicycles.length == 0 ? renderBicycles(initialData) : renderBicycles(listOfBicycles);

    return (
        <div className={styles.bicycles}>
            <CatalogFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className={styles.bicycleList}>
                {bicycleList}
            </div>
        </ div >
    );
}

export default BicycleCatalog;