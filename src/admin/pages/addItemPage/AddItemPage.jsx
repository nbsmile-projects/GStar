import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { ref, set } from "firebase/database";
import { database } from "../../../firebaseInitial";
import useGStarService from "../../../services/GStarService";

import AddItemForm from "../../components/addItemForm/AddItemForm";
import ModalWindow from "../../../components/modalWindow/ModalWindow";

import { setNewItemData, setNewItemThumbnail, setUploadingStatus, reset } from "../../components/addItemForm/addItemSlice";

import ConfirmOperation from "../../components/confirmOperation/ConfirmOperation";
import Spinner from "../../../components/spinner/Spinner";

import styles from "./addItemPage.module.scss";

const AddItemPage = () => {
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const { getThumbnailURL, loading } = useGStarService();

    const dispatch = useDispatch();
    const modalWinStatus = useSelector(state => state.addItem.uploadingStatus);
    const newItemData = useSelector(state => state.addItem.newItemData);
    const thumbnail = useSelector(state => state.addItem.newItemData.thumbnail);

    const AddItemFormRef = useRef(null);

    useEffect(() => {
        if (thumbnail !== null) {
            const { category, id } = newItemData;
            const setData = async () => {
                await set(ref(database, `${category}/` + id), newItemData);
            }
            setData();
            dispatch(setUploadingStatus(false));
            dispatch(reset());
            AddItemFormRef.current.resetForm();
        }
        // eslint-disable-next-line
    }, [thumbnail]);

    const onSubmit = (data) => {
        let id = uuidv4();
        let currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 6);
        currentDate = currentDate.toISOString();
        data = {
            ...data,
            id: id,
            price: +data.price,
            sold: +data.sold,
            thumbnail: null,
            uploadDate: currentDate
        }
        dispatch(setNewItemData(data));
        dispatch(setUploadingStatus(true));
    }

    const onUpload = async () => {
        const { category } = newItemData;
        const thumbnailName = thumbnailFile.name;
        const url = await getThumbnailURL(thumbnailFile, category, thumbnailName);
        dispatch(setNewItemThumbnail({ fileName: thumbnailName, url }));
    };

    return (
        <div className={styles.addItem}>
            <h2 className={styles.title}>Добавить товар</h2>
            <AddItemForm onSubmit={onSubmit} setThumbnail={setThumbnailFile} ref={AddItemFormRef} />
            <ModalWindow modalWinStatus={modalWinStatus} setModalWinStatus={setUploadingStatus}>
                <ConfirmOperation setConfirmStatus={setUploadingStatus} onConfirm={onUpload} />
            </ModalWindow>
            {loading ? <Spinner /> : null}
        </div>
    )
}

export default AddItemPage;