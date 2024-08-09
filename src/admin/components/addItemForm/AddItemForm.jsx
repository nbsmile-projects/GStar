import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

import { setAddItemError } from "./addItemSlice";

import ErrorMessage from '../errorMessage/ErrorMessage';
import thumbPlaceholder from "../../../assets/images/thumbPlaceholder.jpeg";
import styles from "./addItemForm.module.scss";

const AddItemForm = ({ onSubmit, setThumbnail }, ref) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const addItemError = useSelector(state => state.addItem.addItemError);

    const [thumbnailPreview, setThumbnailPreview] = useState(thumbPlaceholder);

    useEffect(() => {
        if (addItemError) {
            const errorMessage = setTimeout(() => {
                dispatch(setAddItemError(false));
            }, 4000);

            return () => clearTimeout(errorMessage);
        }
        // eslint-disable-next-line
    }, [addItemError])

    useImperativeHandle(ref, () => ({ resetForm }));

    const resetForm = () => {
        setThumbnail(null);
        reset();
        setThumbnailPreview(thumbPlaceholder);
    }

    const onError = () => {
        dispatch(setAddItemError(true));
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
        setThumbnailPreview(thumbPlaceholder);
    }

    const validateFileName = (value) => {
        if (value && value[0]) {
            const fileName = value[0].name;
            // eslint-disable-next-line
            const invalidNamePattern = /[ \n\r\t\/?%$#&=@"\\:+]/; // список запрещенных символов

            // eslint-disable-next-line
            return !invalidNamePattern.test(fileName) || "Пробелы, новые строки, возврат каретки, табуляция, а также символы: / ? % # $ & = @ : + \ .. и символы не поддерживаемые в UTF-8 запрещены в названии файла!";
        }
        return true;
    }

    return (
        <form
            className={styles.addItemForm}
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
                    rows="4"
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
                <label htmlFor="select">Категория</label>
                <select
                    className={styles.category}
                    id="category"
                    {...register("category")}>
                    <option value="bicycles">Велосипеды</option>
                    <option value="bicycleParts">Запчасти</option>
                    <option value="bicycleAccs">Аксессуары</option>
                </select>
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
                <label htmlFor="thumbnail">Картинка товара <span>width=height!</span></label>
                <img className={styles.thumbnail} src={thumbnailPreview} alt="thumbnail" />
                <input
                    type="file"
                    id="thumbnail"
                    accept="image/*"
                    {
                    ...register("thumbnail", {
                        required: "Добавьте изображение товара",
                        onChange: onSetThumbnail,
                        validate: validateFileName
                    })}
                />
            </div>
            {addItemError ? <ErrorMessage errors={errors} /> : null}
            <button
                type="submit">
                Добавить
            </button>
        </form >
    );
};

export default forwardRef(AddItemForm);