import React from "react";

import { Square } from "../src/Components/SquareLoader";
import "../src/scss/loaders/_square.scss";

export default {
  title: "Square Loader",
  component: Square,
};

export const withoutClass = () => <Square />;

export const withCustomStyle = () => <Square type={"style"} color="#AA767C" />;
export const withCustomClass = () => (
  <Square type={"class"} className="loader-point" />
);
