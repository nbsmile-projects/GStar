import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

import LoginForm from "../../components/loginForm/LoginForm";

import styles from "./loginPage.module.scss";

const LoginPage = () => {
    const navigate = useNavigate();
    const { isAuth } = useAuth();

    useEffect(() => {
        if (isAuth) {
            navigate("/admin");
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    );
}

export default LoginPage;