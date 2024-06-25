import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { modalWinStatus, setSelectedItem } from "../../modalWindow/modalWinSlice";
import { setLoading } from "../../catalogFilters/catalogFiltersSlice";

import useGStarService from "../../../services/GStarService";
import CatalogFilters from "../../catalogFilters/CatalogFilters";
import Spinner from "../../spinner/Spinner";

import styles from "./catalogPage.module.scss";

function CatalogPage({ type }) {
    const [listOfItems, setListOfItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('morePopular');
    const [content, setContent] = useState(listOfItems);

    const { getAllItems, requestLoading } = useGStarService();

    const dispatch = useDispatch();
    const loading = useSelector(state => state.catalogFilters.loading);

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
        setContent([]);
        getAllItems(category)
            .then(data => {
                setListOfItems(data);
                dispatch(setLoading(true));
            });
    }

    const onItemsLoaded = (items) => {
        dispatch(setLoading(false));
        setContent(items);
    }

    const renderItems = data => {

        return data.map(item => {
            const price = item.price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

            return (
                <li className={styles.item} key={item.id}>
                    <div className={styles.card} onClick={() => {
                        dispatch(setSelectedItem({
                            item: item,
                            type: type
                        }));
                        dispatch(modalWinStatus(true));
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
        dispatch(setLoading(true));
        if (!searchText) {
            return listOfItems;
        }
        return listOfItems.filter(item => {
            return item.name.toLowerCase().includes(searchText.toLowerCase());
        })
    }

    const filterItems = (items, type) => {
        dispatch(setLoading(true));
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
            <CatalogFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setFilter={setFilter} />
            <div className={styles.catalogList}>
                {requestLoading ? <Spinner /> : content}
            </div>
        </ div >
    );
}

export default CatalogPage;