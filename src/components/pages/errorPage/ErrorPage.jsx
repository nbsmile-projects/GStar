import { Link } from "react-router-dom";

import styles from "./errorPage.module.scss";

const ErrorPage = () => {
    return (
        <div className={styles.error}>
            <div className={styles.errorImgWrapper}>
                <img src={`${process.env.PUBLIC_URL}/error/404.png`} alt="error" />
            </div>
            <div className={styles.errorInfo}>
                <p><span>404</span><br />Страница не найдена</p>
                <Link style={{ fontSize: "20px", marginTop: "5px", letterSpacing: "0.6px", width: "100%", textAlign: "center" }} to='/'>Вернуться на главную ←</Link>
            </div>
        </div >
    )
}

export default ErrorPage;