import React from "react";

import { Ring } from "../src/Components/Loaders";
import "../src/scss/loaders/_ring.scss";

export default {
  title: "Loader Ring",
  component: Ring,
};

export const colorFromBody = () => <Ring />;

export const withTypeStyle = () => <Ring type={"style"} color="#AA767C" />;

export const withTypeClass = () => <Ring type={"class"} className="foo" />;
