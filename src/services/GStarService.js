import { useHttp } from "../hooks/http.hook";

const useGStarService = () => {
    const { request, upload, remove, loading, edit, error } = useHttp();

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

    const removeItem = async (category, id, thumbnailName) => {
        await remove(category, id, thumbnailName);
        return;
    }

    const editItem = async (itemData, category, id) => {
        await edit(itemData, category, id);
        return;
    }

    return { getAllItems, getItem, getThumbnailURL, removeItem, editItem, loading, error };
}

export default useGStarService;