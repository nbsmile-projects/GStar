import { useEffect, useState } from "react";

import CatalogFilter from "../../catalogFilter/catalogFilter";

import styles from "./bicyclesPage.module.scss";

function BicyclesPage({ setActive, onItemSelected, loading, setLoading }) {
    const [listOfBicycles, setListOfBicycles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('morePopular');
    const [content, setContent] = useState(listOfBicycles);

    useEffect(() => {
        fetch('http://localhost:3001/bicycles')
            .then(response => response.json())
            .then(data => {
                setLoading(true);
                setListOfBicycles(data);
            });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const bicycleList = renderBicycles(filterItems(searchItem(listOfBicycles, searchTerm), filter));
            onItemsLoaded(bicycleList);
        }, 300);

        return () => clearTimeout(Debounce);
        // eslint-disable-next-line
    }, [loading]);

    const onItemsLoaded = (items) => {
        setLoading(false);
        setContent(items);
    }

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
                        <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}${item.thumbnail.path}`} alt="bicycleThumbnail" />
                        <p className={styles.itemName}>{item.name}</p>
                        <p className={styles.itemPrice}>{price} сом</p>
                    </div>
                    <a href="https://wa.me/+996702557299" className={styles.itemButton}>Купить</a>
                </li>
            )
        })
    }

    const searchItem = (listOfItems, searchText) => {
        setLoading(true);
        if (!searchText) {
            return listOfItems;
        }
        return listOfItems.filter(item => {
            return item.name.toLowerCase().includes(searchText.toLowerCase());
        })
    }

    const filterItems = (items, type) => {
        setLoading(true);
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

    return (
        <div className={styles.bicycles}>
            <CatalogFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setFilter={setFilter}
                setLoading={setLoading} />
            <div className={styles.bicycleList}>
                {content}
            </div>
        </ div >
    );
}

export default BicyclesPage;