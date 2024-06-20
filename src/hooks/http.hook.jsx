import { useState, useCallback } from "react";
import { initializeApp } from 'firebase/app';
import { getDatabase, get, child, ref } from 'firebase/database';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBniXte3wIzX83v1FeNrMzhRui85gGLesQ",
    authDomain: "gstar-cc079.firebaseapp.com",
    databaseURL: "https://gstar-cc079-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "gstar-cc079",
    storageBucket: "gstar-cc079.appspot.com",
    messagingSenderId: "806565435792",
    appId: "1:806565435792:web:45da248a71314b90903b15",
    measurementId: "G-XSK9KTX19R"
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


