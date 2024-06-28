import LoginForm from "../../loginForm/LoginForm";

import styles from './loginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    );
}

export default LoginPage;