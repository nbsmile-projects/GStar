import { useState, useCallback } from "react";
import { initializeApp } from 'firebase/app';
import { getDatabase, get, child, ref } from 'firebase/database';

const firebaseApp = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});
const dbRef = ref(getDatabase(firebaseApp));

export const useHttp = () => {
    const [requestLoading, setRequestLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (category, item = null) => {
        setRequestLoading(true);

        try {
            const snapshot = await get(child(dbRef, `${category}${item ? `/${item}` : ''}`));

            if (!snapshot.exists()) {
                throw new Error("No data available");
            }

            const data = snapshot.val();

            setRequestLoading(false);
            return data;
        } catch (e) {
            setRequestLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return { requestLoading, request, error, clearError }
}


