import { useEffect, useState } from "react";
import useGStarService from "../../../services/GStarService";

import CatalogFilter from "../../catalogFilter/CatalogFilter";
import Spinner from "../../spinner/Spinner";

import styles from "./catalogPage.module.scss";

function CatalogPage({ type, setActive, onItemSelected, loading, setLoading }) {
    const [listOfItems, setListOfItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('morePopular');
    const [content, setContent] = useState(listOfItems);

    const { getAllItems, requestLoading } = useGStarService();

    useEffect(() => {
        onRequest(type);
        // eslint-disable-next-line
    }, [type]);

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredItems = renderItems(filterItems(searchItem(listOfItems, searchTerm), filter));
            onItemsLoaded(filteredItems);
        }, 300);

        return () => clearTimeout(Debounce);
        // eslint-disable-next-line
    }, [loading]);

    const onRequest = (category) => {
        getAllItems(category)
            .then(data => {
                setListOfItems(data);
                setLoading(true);
            });
    }

    const onItemsLoaded = (items) => {
        setLoading(false);
        setContent(items);
    }

    const renderItems = data => {

        return data.map(item => {
            const price = item.price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

            return (
                <li className={styles.item} key={item.id}>
                    <div className={styles.card} onClick={() => {
                        onItemSelected({
                            item: item,
                            type: type
                        });
                        setActive(true);
                    }}>
                        <img className={styles.thumbnail} src={`${process.env.PUBLIC_URL}${item.thumbnail.path}`} alt="thumbnail" />
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
        <div className={styles.catalog}>
            <CatalogFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setFilter={setFilter}
                setLoading={setLoading} />
            <div className={styles.catalogList}>
                {requestLoading ? <Spinner /> : content}
            </div>
        </ div >
    );
}

export default CatalogPage;