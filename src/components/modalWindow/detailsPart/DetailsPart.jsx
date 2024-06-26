import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setModalWinEl } from "../modalWinSlice";

import styles from "./detailsPart.module.scss";

const DetailsPart = () => {
    const dispatch = useDispatch();
    const modalWinEl = useSelector(state => state.modalWin.modalWinEl);
    const selectedItem = useSelector(state => state.modalWin.selectedItem);

    useEffect(() => {
        setModalEl('Win1');
        // eslint-disable-next-line
    }, [])

    const setModalEl = () => {
        dispatch(setModalWinEl('Win1'));
    }

    const unSetModalEl = () => {
        dispatch(setModalWinEl('Win2'));
    }

    const isWinActive = modalWinEl === 'Win1' ? styles.active : "";

    const { name, price, brand, description } = selectedItem.item;
    const isItemBicycle = selectedItem.type === 'bicycles';

    const viewPrice = price !== undefined ? price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') : '';
    return (
        <div className={`${styles.details} ${isWinActive}`}>
            <p className={styles.name}>{name}</p>
            <p className={styles.brand}>{brand}</p>
            <p className={styles.price}>{viewPrice} сом</p>
            <p className={styles.description}>{description}</p>
            <a href="https://wa.me/+996702557299" className={styles.buyButton}>Купить</a>
            {isItemBicycle ? <button className={styles.charcsButton} onClick={unSetModalEl}>Характеристики →</button> : null}
        </div>
    )
}

export default DetailsPart;