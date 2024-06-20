import { useHttp } from "../hooks/http.hook";

const useGStarService = () => {
    const { requestLoading, error, request, clearError } = useHttp();

    const getAllItems = async (category) => {
        const res = await request(category);
        return res;
    }

    const getItem = async (category, id) => {
        const res = await request(category, id);
        return res;
    }

    return { getAllItems, getItem, requestLoading, error, clearError };
}

export default useGStarService;