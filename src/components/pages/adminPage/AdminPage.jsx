import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import { removeAdmin } from "../../loginForm/adminSlice";

const AdminPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuth } = useAuth();

    return isAuth ? (
        <div>
            <h1>Welcome!</h1>
            <button onClick={() => {
                dispatch(removeAdmin());
                localStorage.removeItem("email");
                navigate("/login");
            }}>Log out</button>
        </div>
    ) : (
        <Navigate to="/login" replace={true} />
    )
}

export default AdminPage;