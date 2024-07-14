import { useDispatch } from "react-redux";

import styles from "./confirmOperation.module.scss";

const ConfirmOperation = ({ setConfirmStatus, onConfirm }) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.confirm}>
            <h2>Подтверждение операции...</h2>
            <div className={styles.buttons}>
                <button onClick={() => dispatch(setConfirmStatus(false))}>Отмена</button>
                <button onClick={onConfirm}>Подтвердить</button>
            </div>
        </div>
    );
}

export default ConfirmOperation;