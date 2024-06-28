import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import { removeAdmin } from "../../loginForm/adminSlice";

const AdminPage = () => {
    const dispatch = useDispatch();
    const { isAuth } = useAuth();

    return isAuth ? (
        <div>
            <h1>Welcome!</h1>
            <button onClick={() => dispatch(removeAdmin())}>Log out</button>
        </div>
    ) : (
        <Navigate to="/login" replace={true} />
    )
}

export default AdminPage;