import { useState } from 'react';
import styles from './loginPage.module.scss';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Обработка логина
        console.log({ email, password });
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Log In</h1>
                <input
                    type="text"
                    placeholder="Login"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.button}>Sign In</button>
            </form>
        </div>
    );
}

export default LoginPage;