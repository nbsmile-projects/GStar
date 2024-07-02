import { Link } from "react-router-dom";

import styles from "./errorPage.module.scss";
import pageNotFound from "../../../assets/images/404.png";

const ErrorPage = () => {
    return (
        <div className={styles.error}>
            <div className={styles.errorImgWrapper}>
                <img src={pageNotFound} alt="error" />
            </div>
            <div className={styles.errorInfo}>
                <p><span>404</span><br />Страница не найдена</p>
                <Link style={{ fontSize: "20px", marginTop: "5px", letterSpacing: "0.6px", width: "100%", textAlign: "center" }} to='/'>Вернуться на главную ←</Link>
            </div>
        </div >
    )
}

export default ErrorPage;