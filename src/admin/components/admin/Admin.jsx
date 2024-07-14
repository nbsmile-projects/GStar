import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import useAuth from "../../../hooks/useAuth";
import { removeAdminData } from "./adminSlice";
import { auth } from "../../../firebaseInitial";

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
                onClick={async () => {
                    dispatch(removeAdminData());
                    localStorage.removeItem("admin");
                    await signOut(auth);
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