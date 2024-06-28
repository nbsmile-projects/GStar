import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setLoginError } from "./adminSlice";

import styles from "./form.module.scss";

const Form = ({ handleSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const loginError = useSelector(state => state.admin.loginError);

    useEffect(() => {
        if (loginError) {
            const InvalidLogOrPassw = setTimeout(() => {
                dispatch(setLoginError(false));
            }, 1500);

            return () => clearTimeout(InvalidLogOrPassw);
        }
        // eslint-disable-next-line
    }, [loginError])


    return (
        <div className={styles.form}>
            <h1 className={styles.title}>Log In</h1>
            <input
                type="email"
                placeholder="Login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
            />
            {loginError ? <p className={styles.loginError}>Invalid login or password!</p> : null}
            <button onClick={() => handleSubmit(email, password)} className={styles.button}>Log In</button>
        </div>
    )
}

export default Form;