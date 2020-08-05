import {useEffect, useState} from 'react';

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

    const onOnlineEvent = () => {
        setIsOnline(navigator.onLine);
    };

    const onOfflineEvent = () => {
        setIsOnline(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener('online', onOnlineEvent);
        window.addEventListener('offline', onOfflineEvent);

        return () => {
            window.removeEventListener('online', onOnlineEvent);
            window.removeEventListener('offline', onOfflineEvent);
        };
    }, []);

    return isOnline;
};

export default useOnlineStatus;
