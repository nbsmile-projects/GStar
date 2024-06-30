import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { removeAdminData } from "../components/loginForm/adminSlice";

import AdminMenuBar from "./components/menuBar/AdminMenuBar";

import styles from "./admin.module.scss";

const Admin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth } = useAuth();

    return isAuth ? (
        <div className={styles.admin}>
            <AdminMenuBar />
            <div className={styles.content}>

            </div>
            <button
                className={styles.logoutBtn}
                onClick={() => {
                    dispatch(removeAdminData());
                    localStorage.removeItem("email");
                    navigate("/login");
                }}>
                Log out
            </button>
        </div>
    ) : (
        <Navigate to="/login" replace={true} />
    )
}

export default Admin;