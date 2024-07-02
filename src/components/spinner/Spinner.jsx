

import styles from "./spinner.module.scss";
import spinner from "../../assets/spinner/spinner.gif";

const Spinner = () => {
    return (
        <div className={styles.spinnerWindow}>
            <div className={styles.wrapper}>
                <img className={styles.spinner} src={spinner} alt="spinner" />
            </div>
        </div>
    )
}

export default Spinner;