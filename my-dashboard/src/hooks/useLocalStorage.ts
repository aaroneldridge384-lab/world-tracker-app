'use client';

import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(initialValue);
    const [isLoaded, setIsLoaded] = useState(false);
    const [storageError, setStorageError] = useState<string | null>(null);

    useEffect(() => {
        try {
            const storedValue = window.localStorage.getItem(key);
            if (storedValue !== null) {
                setValue(JSON.parse(storedValue) as T);
            }
        } catch {
            setStorageError('Saved campaign data could not be read.');
        } finally {
            setIsLoaded(true);
        }

        const syncFromAnotherTab = (event: StorageEvent) => {
            if (event.key !== key) return;
            if (event.newValue === null) {
                setValue(typeof initialValue === 'function'
                    ? (initialValue as () => T)()
                    : initialValue);
                return;
            }

            try {
                setValue(JSON.parse(event.newValue) as T);
            } catch {
                setStorageError('Campaign data changed in another tab but could not be read.');
            }
        };

        window.addEventListener('storage', syncFromAnotherTab);
        return () => window.removeEventListener('storage', syncFromAnotherTab);
    }, [key, initialValue]);

    useEffect(() => {
        if (!isLoaded) return;

        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setStorageError(null);
        } catch {
            setStorageError('Campaign data could not be saved. Browser storage may be full.');
        }
    }, [key, isLoaded, value]);

    return [value, setValue as Dispatch<SetStateAction<T>>, isLoaded, storageError] as const;
}
