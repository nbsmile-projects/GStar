import { useHttp } from "../hooks/http.hook";

const useGStarService = () => {
    const { request, upload, remove, loading, error } = useHttp();

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

    const removeItem = async (category, itemName, thumbnailName) => {
        await remove(category, itemName, thumbnailName);
        return;
    }

    return { getAllItems, getItem, getThumbnailURL, removeItem, loading, error };
}

export default useGStarService;