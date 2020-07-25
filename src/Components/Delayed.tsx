import React, {useEffect, useState} from 'react';

interface Props {
    waitBeforeShow: number;
}

const Delayed: React.FC<Props> = props => {
    const [hidden, setHidden] = useState<boolean>(true);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setHidden(false);
        }, props.waitBeforeShow);

        return () => clearTimeout(timerId);
    }, [props.waitBeforeShow]);
    return (
        <>
            {hidden ? null : props.children}
        </>
    );
};

export default Delayed;
