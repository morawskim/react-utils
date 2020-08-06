import {useCallback, useEffect, useState} from 'react';

const useOnlineStatus = (): boolean => {
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

    const onOnlineEvent = useCallback(() => {
        setIsOnline(navigator.onLine);
    }, [setIsOnline]);

    const onOfflineEvent = useCallback(() => {
        setIsOnline(navigator.onLine);
    }, [setIsOnline]);

    useEffect(() => {
        window.addEventListener('online', onOnlineEvent);
        window.addEventListener('offline', onOfflineEvent);

        return () => {
            window.removeEventListener('online', onOnlineEvent);
            window.removeEventListener('offline', onOfflineEvent);
        };
    }, [onOnlineEvent, onOfflineEvent]);

    return isOnline;
};

export default useOnlineStatus;
