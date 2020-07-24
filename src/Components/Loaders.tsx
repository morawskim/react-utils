import React, {CSSProperties} from 'react';

interface TypeClass {
    type?: "class";
    className?: string;
}
interface TypeStyle {
    type?: "style";
    color?: string;
}
type Props = {type?: string} & (TypeClass | TypeStyle);

const Ring: React.FC<Props> = props => {
    const style: CSSProperties = props.type === 'style' ? {color: props.color} : {};
    return (
        <div style={style} className={`lds-ring ${props.type === 'class' ? props.className : ''}`}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export {Ring};
