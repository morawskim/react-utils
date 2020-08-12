import React, { CSSProperties } from "react";

interface TypeClass {
  type?: "class";
  className?: string;
}

interface TypeStyle {
  type?: "style";
  color?: string;
}

type Props = TypeClass | TypeStyle;

const TwoPoint: React.FC<Props> = (props) => {
  const style: CSSProperties =
    props.type === "style" ? { color: props.color } : {};
  return (
    <span
      style={style}
      className={`two-point ${props.type === "class" ? props.className : ""}`}
    ></span>
  );
};

export { TwoPoint };
