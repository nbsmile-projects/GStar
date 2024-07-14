import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebaseInitial";

import { setAdminData, setLoginError } from "../admin/adminSlice";

import Form from "./Form";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setAdminData({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }))
                localStorage.setItem("admin", JSON.stringify({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }));
                navigate("/admin");
            })
            .catch(() => {
                dispatch(setLoginError(true))
            })
    };

    return (
        <Form handleSubmit={handleSubmit} />
    )
}
export default Login;