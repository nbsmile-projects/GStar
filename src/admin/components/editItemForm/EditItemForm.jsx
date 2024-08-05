import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

import { setEditItemError, setActiveSection } from "../editItemsList/editItemsSlice";

import ErrorMessage from "../errorMessage/ErrorMessage";
import styles from "./editItemForm.module.scss";

const EditItemForm = ({ onSubmit, setThumbnail }) => {
    const dispatch = useDispatch();
    const editItemError = useSelector(state => state.editItems.editItemError);
    const modifiedItemData = useSelector(state => state.editItems.modifiedItemData);
    const currentThumbnail = useSelector(state => state.editItems.currentThumbnail);

    const [thumbnailPreview, setThumbnailPreview] = useState(currentThumbnail.url);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: modifiedItemData.name,
            brand: modifiedItemData.brand,
            description: modifiedItemData.description,
            price: modifiedItemData.price,
            sold: modifiedItemData.sold
        }
    });

    useEffect(() => {
        if (editItemError) {
            const errorMessage = setTimeout(() => {
                dispatch(setEditItemError(false));
            }, 4000);

            return () => clearTimeout(errorMessage);
        }
        // eslint-disable-next-line
    }, [editItemError])

    const onError = () => {
        dispatch(setEditItemError(true));
    }

    const onSetThumbnail = (e) => {
        const thumbnail = e.target.files[0];
        if (thumbnail) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setThumbnailPreview(e.target.result);
            };
            reader.readAsDataURL(thumbnail);
            setThumbnail(thumbnail);
            return;
        }
        setThumbnailPreview(currentThumbnail);
        setThumbnail(null);
    }

    const validateFileName = (value) => {
        if (value && value[0]) {
            const fileName = value[0].name;
            const invalidNamePattern = /[ \n\r\t\/?%$#&=@"\\:+]/; // список запрещенных символов

            return !invalidNamePattern.test(fileName) || "Пробелы, новые строки, возврат каретки, табуляция, а также символы: / ? % # $ & = @ : + \ .. и символы не поддерживаемые в UTF-8 запрещены в названии файла!";
        }
        return true;
    }

    return (
        <form
            className={styles.editItemForm}
            onSubmit={handleSubmit(onSubmit, onError)}>
            <div className={styles.field}>
                <label htmlFor="name">Название</label>
                <input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "Заполните поля",
                        pattern: {
                            value: /^[^.$[\]&#]+$/,
                            message: "Знаки . $ [ ] # & недопустимы в имени"
                        }
                    })} />
            </div>
            <div className={styles.field}>
                <label htmlFor="brand">Бренд</label>
                <input
                    type="text"
                    id="brand"
                    {...register("brand", {
                        required: "Заполните поля"
                    })} />
            </div>
            <div className={styles.field}>
                <label htmlFor="description">Описание</label>
                <textarea
                    id="description"
                    rows="5"
                    {...register("description", {
                        required: "Заполните поля"
                    })} />
            </div>
            <div className={styles.field}>
                <label htmlFor="price">Цена</label>
                <input
                    type="number"
                    id="price"
                    {...register("price", {
                        required: "Заполните поля"
                    })} />
            </div>
            <div className={styles.field}>
                <label htmlFor="sold">Продано</label>
                <input
                    type="number"
                    id="sold"
                    {...register("sold", {
                        required: "Заполните поля"
                    })} />
            </div>
            <div className={styles.field}>
                <label htmlFor="thumbnail">Картинка товара <span>width = height!</span></label>
                <img className={styles.thumbnail} src={thumbnailPreview} alt="thumbnail" />
                <input
                    type="file"
                    id="thumbnail"
                    accept="image/*"
                    {
                    ...register("thumbnail", {
                        onChange: onSetThumbnail,
                        validate: validateFileName
                    })}
                />
            </div>
            {editItemError ? <ErrorMessage errors={errors} /> : null}
            <button
                type="button"
                onClick={() => dispatch(setActiveSection("editItemsList"))}>
                Отменить
            </button>
            <button
                type="submit">
                Сохранить
            </button>
        </form >
    );
};

export default EditItemForm;