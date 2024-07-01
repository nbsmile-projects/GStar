import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { setAdminData, setLoginError } from "./adminSlice";

import Form from "./Form";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (email, password) => {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setAdminData({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }))
                localStorage.setItem("email", JSON.stringify(user.email));
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