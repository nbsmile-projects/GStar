import { useEffect, useState } from "react";

import CatalogFilter from "../../catalogFilter/catalogFilter";

import styles from "./bicyclePartsPage.module.scss";

const BicyclePartsPage = ({ setActive, onItemSelected, loading, setLoading }) => {
    const [listOfBicycleParts, setListOfBicycleParts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('morePopular');
    const [content, setContent] = useState(listOfBicycleParts);

    useEffect(() => {
        fetch('http://localhost:3001/bicycleParts')
            .then(response => response.json())
            .then(data => {
                setLoading(true);
                setListOfBicycleParts(data);
            })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const bicyclePartsList = renderBicycleParts(filterItems(searchItem(listOfBicycleParts, searchTerm), filter));
            onItemsLoaded(bicyclePartsList);
        }, 300);

        return () => clearTimeout(Debounce);
        // eslint-disable-next-line
    }, [loading]);

    const onItemsLoaded = (items) => {
        setLoading(false);
        setContent(items);
    }

    const renderBicycleParts = data => {
        return data.map(item => {
            const { thumbnail, name, price, id } = item;

            return (
                <li className={styles.item} key={id}>
                    <div
                        className={styles.card}
                        onClick={() => {
                            onItemSelected({
                                item: item,
                                type: 'bicyclePart'
                            });
                            setActive(true);
                        }}>
                        <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}${thumbnail.path}`} alt="bicyclePartThumbnail" />
                        <p className={styles.itemName}>{name}</p>
                        <p className={styles.itemPrice}>{price} сом</p>
                    </div>
                    <a href="https://wa.me/+996702557299" className={styles.itemButton}>Купить</a>
                </li >
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
        <div className={styles.bicycleParts}>
            <CatalogFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setFilter={setFilter}
                setLoading={setLoading} />
            <div className={styles.bicyclePartsList}>
                {content}
            </div>
        </ div >
    );
}

export default BicyclePartsPage;