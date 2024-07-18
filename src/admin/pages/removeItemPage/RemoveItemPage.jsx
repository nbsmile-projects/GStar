import { useDispatch, useSelector } from "react-redux";

import useGStarService from "../../../services/GStarService";
import { setCategory, setRemovingStatus, setSelectedItem } from "../../components/removeItemsList/removeItemsSlice";

import RemoveItemsList from "../../components/removeItemsList/RemoveItemsList";
import ModalWindow from "../../../components/modalWindow/ModalWindow";
import ConfirmOperation from "../../components/confirmOperation/ConfirmOperation";
import Spinner from "../../../components/spinner/Spinner";

import styles from "./removeItemPage.module.scss";

const RemoveItemPage = () => {
    const { removeItem, loading } = useGStarService();
    const dispatch = useDispatch();

    const modalWinStatus = useSelector(state => state.removeItems.removingStatus);
    const selectedItem = useSelector(state => state.removeItems.selectedItem);

    const onSelectItemToRemove = (category, itemName, thumbnailName) => {
        dispatch(setSelectedItem({ name: itemName, category, thumbnailName }));
        dispatch(setRemovingStatus(true));
    }

    const onRemove = async () => {
        const { name, category, thumbnailName } = selectedItem;
        await removeItem(category, name, thumbnailName);
        dispatch(setRemovingStatus(false));
        window.location.reload();
    }

    return (
        <div className={styles.removeItem}>
            <h2 className={styles.title}>Удалить товар</h2>
            <div>
                <button className={styles.categoryButton} onClick={() => dispatch(setCategory("bicycles"))}>Велосипеды</button>
                <button className={styles.categoryButton} onClick={() => dispatch(setCategory("bicycleAccs"))}>Велоаксессуары</button>
                <button className={styles.categoryButton} onClick={() => dispatch(setCategory("bicycleParts"))}>Велозапчасти</button>
            </div>
            <RemoveItemsList onSelectItemToRemove={onSelectItemToRemove} />
            <ModalWindow modalWinStatus={modalWinStatus} setModalWinStatus={setRemovingStatus}>
                <ConfirmOperation setConfirmStatus={setRemovingStatus} onConfirm={onRemove} />
            </ModalWindow>
            {loading ? <Spinner /> : null}
        </div>
    )
}

export default RemoveItemPage;