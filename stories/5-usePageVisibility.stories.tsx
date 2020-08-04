import React, {useEffect} from 'react';

import usePageVisibility from "../src/hooks/usePageVisibility";

const Example: React.FC = () => {
    const pageVisibility = usePageVisibility();
    const ref = React.createRef<HTMLPreElement>();

    useEffect(() => {
        console.log('page visibility', pageVisibility);
        if (ref.current) {
            ref.current.appendChild(document.createTextNode(`page visibility dump: ${JSON.stringify(pageVisibility, null, 2)}\n`));
        }
    }, [pageVisibility.hidden]);

    return (
        <>
            Check browser logs or log below
            <pre ref={ref}/>
        </>
    );
}

export default {
    title: 'usePageVisibility',
    component: Example,
};

export const onlyOneChild = () => (
    <Example />
);
