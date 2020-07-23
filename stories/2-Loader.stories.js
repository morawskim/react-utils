import React from 'react';

import { Ring } from '../src/Components/Loaders';
import '../src/scss/loaders/_ring.scss'

export default {
  title: 'Loader Ring',
  component: Ring,
};

export const colorFromBody = () => (
  <Ring />
);

export const inheritColor = () => (
  <div style={{color: '#AA767C'}}><Ring /></div>
);
