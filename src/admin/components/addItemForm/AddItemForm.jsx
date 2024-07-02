
import styles from "./addItemForm.module.scss";

const AddItemForm = () => {

    return (
        <form className={styles.addItemForm}>
            <div className={styles.field}>
                <label htmlFor="name">Название</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required />
            </div>
            <div className={styles.field}>
                <label htmlFor="brand">Бренд</label>
                <input
                    type="text"
                    id="brand"
                    name="brand"
                    required />
            </div>
            <div className={styles.field}>
                <label htmlFor="description">Описание</label>
                <textarea
                    id="description"
                    name="description"
                    rows="4"
                    required></textarea>
            </div>
            <div className={styles.field}>
                <label htmlFor="price">Цена</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    step="0.01"
                    required />
            </div>
            <div className={styles.field}>
                <label htmlFor="select">Категория</label>
                <select className={styles.category} name="select">
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
                    name="sold"
                    required />
            </div>
            <div className={styles.field}>
                <label htmlFor="image">Картинка товара <span>1080x1080px</span></label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    required />
            </div>
            <button type="submit">Добавить</button>
        </form >
    );
};

export default AddItemForm;