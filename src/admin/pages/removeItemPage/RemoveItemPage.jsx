
import RemoveItemsList from "../../components/removeItemsList/RemoveItemsList";

import styles from "./removeItemPage.module.scss";

const RemoveItemPage = () => {

    return (
        <div className={styles.removeItem}>
            <h2 className={styles.title}>Удалить товар</h2>
            <RemoveItemsList />
        </div>
    )
}

export default RemoveItemPage;