import React from 'react';

import Delayed from "../src/Components/Delayed";

export default {
    title: 'Delayed',
    component: Delayed,
};

export const onlyOneChild = () => (
    <><h1>wait 2s</h1><Delayed waitBeforeShow={2000}><h1>Foo</h1></Delayed></>
);

export const manyChildren = () => (
    <><h1>wait 2s</h1><Delayed waitBeforeShow={2000}><h1>Foo</h1><h2>Bar</h2></Delayed></>
);
