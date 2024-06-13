import { useEffect, useState } from "react";

import CatalogFilter from "../catalogFilter/catalogFilter";

import styles from "./bicycleCatalog.module.scss";

function BicycleCatalog({ active, setActive, onItemSelected }) {
    const [listOfBicycles, setListOfBicycles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/bicycles')
            .then(response => response.json())
            .then(data => setListOfBicycles(data));
    }, []);

    const renderBicycles = data => {

        return data.map(item => {
            const price = item.price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

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
                        <p className={styles.itemPrice}>{price} сом</p>
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

    const filterItems = (items, type) => {
        switch (type) {
            case "morePopular":
                return items.sort((a, b) => b.sold - a.sold);
            case "newer":
                return items.sort((a, b) => {
                    const firstPastDate = new Date(a.uploadDate);
                    const secondPastDate = new Date(b.uploadDate);

                    let currentDate = new Date();
                    currentDate.setHours(currentDate.getHours() + 6);

                    let timeDifferenceOfFirst = currentDate - firstPastDate;
                    let timeDifferenceOfSecond = currentDate - secondPastDate;

                    return timeDifferenceOfFirst - timeDifferenceOfSecond;
                });
            case "highToLow":
                return items.sort((a, b) => b.price - a.price);
            case "lowToHigh":
                return items.sort((a, b) => a.price - b.price);
            default:
                return items;
        }
    }

    const bicycleList = renderBicycles(filterItems(searchItem(listOfBicycles, searchTerm), filter));


    return (
        <div className={styles.bicycles}>
            <CatalogFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} setFilter={setFilter} />
            <div className={styles.bicycleList}>
                {bicycleList}
            </div>
        </ div >
    );
}

export default BicycleCatalog;