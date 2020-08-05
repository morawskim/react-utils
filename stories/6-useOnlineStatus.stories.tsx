import React, {useEffect} from 'react';
import useOnlineStatus from "../src/hooks/useOnlineStatus";

const Example: React.FC = () => {
    const isOnline = useOnlineStatus();
    const ref = React.createRef<HTMLPreElement>();

    useEffect(() => {
        console.log('isOnline', isOnline);
        if (ref.current) {
            ref.current.appendChild(document.createTextNode(`is online? ${JSON.stringify(isOnline, null, 2)}\n`));
        }
    }, [isOnline]);

    return (
        <>
            Open dev tools and enable/disable network.
            <pre ref={ref}/>
        </>
    );
}

export default {
    title: 'useOnlineStatus',
    component: Example,
};

export const example = () => (
    <Example />
);
