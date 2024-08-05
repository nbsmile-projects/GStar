import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useGStarService from "../../../services/GStarService";
import { setListOfItems, setActiveSection, setModifiedItemData, setCurrentThumbnail, setCurrentID } from "./editItemsSlice";

import Spinner from "../../../components/spinner/Spinner";

import styles from "./editItemsList.module.scss";
import pen from "../../../assets/icons/pen.svg";

const EditItemsList = () => {
    const [content, setContent] = useState();

    const { getAllItems, loading } = useGStarService();
    const dispatch = useDispatch();
    const listOfItems = useSelector(state => state.editItems.listOfItems);
    const category = useSelector(state => state.editItems.category);

    useEffect(() => {
        onRequest(category);
    }, [category]);

    useEffect(() => {
        const items = renderItems(listOfItems);
        onItemsLoaded(items);
    }, [loading]);

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

    const onSelectItem = (itemData) => {
        const { brand, description, name, price, sold, thumbnail, id } = itemData;
        dispatch(setModifiedItemData({
            brand,
            description,
            name,
            price,
            sold,
            thumbnail: null
        }));
        dispatch(setCurrentThumbnail(thumbnail));
        dispatch(setCurrentID(id));
        dispatch(setActiveSection("editItemForm"));
    }

    const renderItems = data => {
        return data.map(item => {
            return (
                <li className={styles.item} key={item.id}>
                    <div className={styles.itemCard}>
                        <img className={styles.thumbnail} src={item.thumbnail.url} alt="thumbnail" />
                        <p className={styles.name}>{item.name}</p>
                        <img className={styles.pen} onClick={() => onSelectItem(item)} src={pen} alt="pen" />
                    </div>
                </li>
            )
        });
    }

    return (
        <div className={styles.editItemsList}>
            {loading ? <Spinner /> : content}
        </div>
    );
}

export default EditItemsList;