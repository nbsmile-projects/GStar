
import styles from "./modalWindow.module.scss";

const ModalWindow = ({ active, setActive, children }) => {

    const isModalWinActive = active ? `${styles.modal} ${styles.active}` : styles.modal;
    const isModalContentActive = active ? `${styles.modalContent} ${styles.active}` : styles.modalContent;

    return (
        <div className={isModalWinActive} onClick={() => setActive(false)}>
            <div className={isModalContentActive} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWindow;