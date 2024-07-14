import { useDispatch } from "react-redux";

import styles from "./modalWindow.module.scss";

const ModalWindow = ({ children, modalWinStatus, setModalWinStatus }) => {
    const dispatch = useDispatch();

    const isModalWinActive = modalWinStatus ? `${styles.modal} ${styles.active}` : styles.modal;
    const isModalContentActive = modalWinStatus ? `${styles.modalContent} ${styles.active}` : styles.modalContent;

    return (
        <div className={isModalWinActive} onClick={() => dispatch(setModalWinStatus(false))}>
            <div className={isModalContentActive} onClick={e => e.stopPropagation()}>
            <button className={styles.closeModalWinBtn} onClick={() => dispatch(setModalWinStatus(false))}>x</button>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow;