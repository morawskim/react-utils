import React from "react";

import { TwoPoint } from "../src/Components/TwoPointLoader";
import "../src/scss/loaders/_two_point.scss";

export default {
  title: "Two Point Loader",
  component: TwoPoint,
};

export const withoutCustomClass = () => <TwoPoint />;

export const withCustomStyle = () => (
  <TwoPoint type={"style"} color="#AA767C" />
);
export const withCustomClass = () => (
  <TwoPoint type={"class"} className="loader-point" />
);
