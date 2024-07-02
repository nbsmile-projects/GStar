import { useState, useCallback } from "react";
import { getDatabase, get, child, ref } from 'firebase/database';

import { firebaseApp} from "../firebaseInitial";

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

    return { requestLoading, request, error }
}


