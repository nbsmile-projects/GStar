import { useState, useCallback } from "react";
import { get, child, ref as databaseRef, remove as removeItem, update } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage, database } from "../firebaseInitial";

const dbRef = databaseRef(database);

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (category, item = null) => {
        setLoading(true);

        try {
            const snapshot = await get(child(dbRef, `${category}${item ? `/${item}` : ''}`));

            if (!snapshot.exists()) {
                throw new Error("No data available");
            }

            const data = snapshot.val();

            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const upload = useCallback(async (file, category, fileName) => {
        setLoading(true);
        const thumbnailRef = storageRef(storage, `${category}/${fileName}`);

        try {
            const value = await uploadBytes(thumbnailRef, file);
            const url = await getDownloadURL(value.ref);

            setLoading(false);
            return url;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const remove = useCallback(async (category, id, thumbnailName) => {
        setLoading(true);

        try {
            await removeItem(databaseRef(database, `${category}/${id}`));
            await deleteObject(storageRef(storage, `${category}/${thumbnailName}`));

            setLoading(false);
            return;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const edit = useCallback(async (itemData, category, id) => {
        setLoading(true);

        try {
            await update(databaseRef(database, `${category}/${id}`), itemData);

            setLoading(false);
            return;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    return { loading, request, error, upload, remove, edit }
}