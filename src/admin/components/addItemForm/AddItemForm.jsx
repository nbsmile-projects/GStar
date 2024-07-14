import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

import { setAddItemError } from "./addItemSlice";

import ErrorMessage from '../errorMessage/ErrorMessage';
import styles from "./addItemForm.module.scss";

const AddItemForm = ({ onSubmit, setThumbnail }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const addItemError = useSelector(state => state.addItem.addItemError);

    useEffect(() => {
        if (addItemError) {
            const errorMessage = setTimeout(() => {
                dispatch(setAddItemError(false));
            }, 1800);

            return () => clearTimeout(errorMessage);
        }
        // eslint-disable-next-line
    }, [addItemError])

    const onError = () => {
        dispatch(setAddItemError(true));
    }

    const onSetThumbnail = (e) => {
        const thumbnail = e.target.files[0];
        setThumbnail(thumbnail);
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
                            value: /^[^.$[\]#]+$/,
                            message: "Знаки . $ [ ] # недопустимы в имени"
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
                <label htmlFor="thumbnail">Картинка товара <span>1080x1080px</span></label>
                <input
                    type="file"
                    id="thumbnail"
                    accept="image/*"
                    {
                    ...register("thumbnail", {
                        required: "Добавьте изображение товара",
                        onChange: onSetThumbnail
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

export default AddItemForm;