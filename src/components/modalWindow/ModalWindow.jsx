import { useSelector, useDispatch } from "react-redux";

import { modalWinStatus } from "./modalWinSlice";

import styles from "./modalWindow.module.scss";

const ModalWindow = ({ children }) => {
    const dispatch = useDispatch();
    const ModalWinStatus = useSelector(state => state.modalWin.isModalWinActive);

    const isModalWinActive = ModalWinStatus ? `${styles.modal} ${styles.active}` : styles.modal;
    const isModalContentActive = ModalWinStatus ? `${styles.modalContent} ${styles.active}` : styles.modalContent;

    return (
        <div className={isModalWinActive} onClick={() => dispatch(modalWinStatus(false))}>
            <div className={isModalContentActive} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow;