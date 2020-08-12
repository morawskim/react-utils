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

const Square: React.FC<Props> = (props) => {
  const style: CSSProperties =
    props.type === "style" ? { color: props.color } : {};
  return (
    <span
      style={style}
      className={`square ${props.type === "class" ? props.className : ""}`}
    ></span>
  );
};

export { Square };
