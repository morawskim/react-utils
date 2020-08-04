import { useEffect, useState } from 'react';

interface PageVisibilityState {
    readonly hidden: boolean;
    readonly visibilityState: string;
}

const createState = (state: VisibilityState): PageVisibilityState => {
    return {
        visibilityState: state,
        hidden: state !== "visible",
    }
};

const usePageVisibility = () => {
    const [pageVisibilityState, setPageVisibilityState] = useState<PageVisibilityState>(createState(document.visibilityState));

    const onVisibilityChangeEvent = () => {
        setPageVisibilityState(createState(document.visibilityState));
    };

    useEffect(() => {
        document.addEventListener('visibilitychange', onVisibilityChangeEvent);

        return () => {
            document.removeEventListener('visibilitychange', onVisibilityChangeEvent);
        };
    }, []);

    return pageVisibilityState;
};

export default usePageVisibility;
