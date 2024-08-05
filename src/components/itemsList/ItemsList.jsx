import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { modalWinStatus, setSelectedItem } from "../modalWindow/modalWinSlice";
import { setFiltering } from "../catalogFilters/catalogFiltersSlice";

import { setListOfItems } from "./itemsListSlice";

import useGStarService from "../../services/GStarService";
import useFilters from "../../hooks/useFilters";
import Spinner from "../spinner/Spinner";

import styles from "./itemsList.module.scss";

const ItemsList = () => {
    const [content, setContent] = useState([]);

    const { getAllItems, loading } = useGStarService();
    const { searchItem, filterItems } = useFilters();

    const dispatch = useDispatch();
    const filtering = useSelector(state => state.catalogFilters.filtering);
    const filter = useSelector(state => state.catalogFilters.filter);
    const searchTerm = useSelector(state => state.catalogFilters.searchTerm);
    const listOfItems = useSelector(state => state.itemsList.listOfItems);
    const type = useSelector(state => state.itemsList.contentType);

    useEffect(() => {
        setContent([]);
        onRequest(type);
        // eslint-disable-next-line
    }, [type]);

    useEffect(() => {
        if (listOfItems.length !== 0) {
            const Debounce = setTimeout(() => {
                if (listOfItems.length !== 0) {
                    const filteredItems = renderItems(filterItems(searchItem(listOfItems, searchTerm), filter));
                    onItemsLoaded(filteredItems);
                }
            }, 300);

            return () => clearTimeout(Debounce);
        }
        // eslint-disable-next-line
    }, [filtering])

    const onRequest = async (type) => {
        if (type === '') return
        await getAllItems(type)
            .then(data => {
                dispatch(setListOfItems(data));
                dispatch(setFiltering(true));
            });
    }

    const onItemsLoaded = (items) => {
        setContent(items);
        dispatch(setFiltering(false));
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
                        <img className={styles.thumbnail} src={item.thumbnail.url} alt="thumbnail" />
                        <p className={styles.itemName}>{item.name}</p>
                        <p className={styles.itemPrice}>{price} сом</p>
                    </div>
                    <a href="https://wa.me/+996702557299" className={styles.itemButton}>Купить</a>
                </li>
            )
        })
    }

    return (
        <div className={styles.catalogList}>
            {loading ? <Spinner /> : content}
        </div>
    )
}

export default ItemsList;