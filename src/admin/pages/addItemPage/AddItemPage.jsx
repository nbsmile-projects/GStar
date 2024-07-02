
import AddItemForm from "../../components/addItemForm/AddItemForm";

import styles from "./addItemPage.module.scss";

const AddItemPage = () => {

    return (
        <div className={styles.addItem}>
            <h2 className={styles.title}>Добавить товар</h2>
            <AddItemForm />
        </div>
    )
}

export default AddItemPage;