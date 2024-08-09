import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useGStarService from "../../../services/GStarService";
import { setListOfItems } from "./removeItemsSlice";

import Spinner from "../../../components/spinner/Spinner";

import styles from "./removeItemsList.module.scss";
import bucket from "../../../assets/icons/bucket.svg";

const RemoveItemsList = ({ onSelectItemToRemove }, ref) => {
    const [content, setContent] = useState();

    const { getAllItems, loading } = useGStarService();
    const dispatch = useDispatch();
    const listOfItems = useSelector(state => state.removeItems.listOfItems);
    const category = useSelector(state => state.removeItems.category);

    useEffect(() => {
        onRequest(category);
        // eslint-disable-next-line
    }, [category]);

    useEffect(() => {
        const items = renderItems(listOfItems);
        onItemsLoaded(items);
        // eslint-disable-next-line
    }, [loading]);

    useImperativeHandle(ref, () => ({ onRequest }));

    const onRequest = async (type) => {
        await getAllItems(type)
            .then(data => {
                const arrOfItems = Object.values(data);
                dispatch(setListOfItems(arrOfItems));
            });
    }

    const onItemsLoaded = (items) => {
        setContent(items);
    }

    const renderItems = data => {
        return data.map(item => {
            return (
                <li className={styles.item} key={item.id}>
                    <div className={styles.itemCard}>
                        <img className={styles.thumbnail} src={item.thumbnail.url} alt="thumbnail" />
                        <p className={styles.name}>{item.name}</p>
                        <img className={styles.bucket} src={bucket} onClick={() => onSelectItemToRemove(category, item.id, item.thumbnail.fileName)} alt="bucket" />
                    </div>
                </li>
            )
        });
    }

    return (
        <div className={styles.removeItemsList}>
            {loading ? <Spinner /> : content}
        </div>
    );
}

export default forwardRef(RemoveItemsList);