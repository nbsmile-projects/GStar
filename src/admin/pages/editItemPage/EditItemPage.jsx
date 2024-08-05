import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../../firebaseInitial";
import { ref as storageRef, deleteObject } from "firebase/storage";

import useGStarService from "../../../services/GStarService";
import { setCategory, setEditingStatus, setModifiedItemData, setModifiedItemThumbnail } from "../../components/editItemsList/editItemsSlice";

import EditItemList from "../../components/editItemsList/EditItemsList";
import EditItemForm from "../../components/editItemForm/EditItemForm";
import Spinner from "../../../components/spinner/Spinner";
import ModalWindow from "../../../components/modalWindow/ModalWindow";
import ConfirmOperation from "../../components/confirmOperation/ConfirmOperation";

import styles from "./editItemPage.module.scss";

const EditItemPage = () => {
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const { getThumbnailURL, editItem, loading } = useGStarService();

    const dispatch = useDispatch();
    const activeSection = useSelector(state => state.editItems.activeSection);
    const modalWinStatus = useSelector(state => state.editItems.editingStatus);
    const modifiedItemData = useSelector(state => state.editItems.modifiedItemData);
    const thumbnail = useSelector(state => state.editItems.modifiedItemData.thumbnail);
    const currentThumbnail = useSelector(state => state.editItems.currentThumbnail);
    const currentID = useSelector(state => state.editItems.currentID);
    const category = useSelector(state => state.editItems.category);

    useEffect(() => {
        if (thumbnail) {
            editItem(modifiedItemData, category, currentID);
            dispatch(setEditingStatus(false));
            window.location.reload();
        }
        // eslint-disable-next-line
    }, [thumbnail]);

    const onSubmitModifiedData = (data) => {
        data = {
            ...data,
            price: +data.price,
            sold: +data.sold,
            thumbnail: null
        }
        dispatch(setModifiedItemData(data));
        dispatch(setEditingStatus(true));
    }

    const onUploadModifiedData = async () => {
        if (thumbnailFile) {
            await deleteObject(storageRef(storage, `${category}/${currentThumbnail.fileName}`));
            const url = await getThumbnailURL(thumbnailFile, category, thumbnailFile.name);
            dispatch(setModifiedItemThumbnail({ fileName: thumbnailFile.name, url }));
            return;
        }
        dispatch(setModifiedItemThumbnail(currentThumbnail));
    };

    return activeSection === "editItemsList"
        ?
        (
            <div className={styles.editItemPage}>
                <h2 className={styles.title}>Редактировать товар</h2>

                <button className={styles.categoryButton} onClick={() => dispatch(setCategory("bicycles"))}>Велосипеды</button>
                <button className={styles.categoryButton} onClick={() => dispatch(setCategory("bicycleAccs"))}>Велоаксессуары</button>
                <button className={styles.categoryButton} onClick={() => dispatch(setCategory("bicycleParts"))}>Велозапчасти</button>

                <EditItemList />

                {loading ? <Spinner /> : null}
            </div>
        )
        :
        activeSection === "editItemForm"
            ?
            (
                <div className={styles.editItemPage}>
                    <h2 className={styles.title}>Редактировать товар</h2>
                    <EditItemForm onSubmit={onSubmitModifiedData} setThumbnail={setThumbnailFile} />
                    <ModalWindow modalWinStatus={modalWinStatus} setModalWinStatus={setEditingStatus}>
                        <ConfirmOperation setConfirmStatus={setEditingStatus} onConfirm={onUploadModifiedData} />
                    </ModalWindow>
                    {loading ? <Spinner /> : null}
                </div>
            )
            :
            null
}

export default EditItemPage;