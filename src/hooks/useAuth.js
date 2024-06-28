import { useSelector } from "react-redux";

const useAuth = () => {
    const { email, token, id } = useSelector(state => state.admin);

    return {
        isAuth: !!localStorage.getItem("email"),
        email,
        token,
        id
    }
}

export default useAuth;