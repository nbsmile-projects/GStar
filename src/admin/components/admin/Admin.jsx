import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import { removeAdminData } from "../loginForm/adminSlice";

import AdminMenuBar from "../adminMenuBar/AdminMenuBar";
import AddItemPage from "../../pages/addItemPage/AddItemPage";
import RemoveItemPage from "../../pages/removeItemPage/RemoveItemPage";
import EditItemPage from "../../pages/editItemPage/EditItemPage";

import styles from "./admin.module.scss";

const Admin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth } = useAuth();
    const activeSection = useSelector(state => state.admin.activeSection);

    const content = () => {
        switch (activeSection) {
            case "add-item":
                return <AddItemPage />;
            case "remove-item":
                return <RemoveItemPage />;
            case "edit-item":
                return <EditItemPage />;
            default:
                return
        }
    }

    return isAuth ? (
        <div className={styles.admin}>
            <AdminMenuBar />
            <div className={styles.content}>
                {content()}
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