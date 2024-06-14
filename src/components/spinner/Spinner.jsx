

import styles from "./spinner.module.scss";

const Spinner = () => {
    return (
        <div className={styles.spinnerWindow}>
            <div className={styles.wrapper}>
                <img className={styles.spinner} src={`${process.env.PUBLIC_URL}/spinner/spinner.gif`} />
            </div>
        </div>
    )
}

export default Spinner;