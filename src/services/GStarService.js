import { useHttp } from "../hooks/http.hook";

const useGStarService = () => {
    const { request, upload, loading, error } = useHttp();

    const getAllItems = async (category) => {
        const res = await request(category);
        return res;
    }

    const getItem = async (category, id) => {
        const res = await request(category, id);
        return res;
    }

    const getThumbnailURL = async (file, category, fileName) => {
        const url = await upload(file, category, fileName);
        return url;
    }

    return { getAllItems, getItem, getThumbnailURL, loading, error };
}

export default useGStarService;