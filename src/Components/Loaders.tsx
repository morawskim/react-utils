import React from 'react';

interface Props {

}

const Ring: React.FC<Props> = props => {
    return (
        <div className="lds-ring">
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export {Ring};
