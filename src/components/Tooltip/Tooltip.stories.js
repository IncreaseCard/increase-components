import React from 'react';

import { storiesOf } from '@storybook/react';

import Tooltip from './Tooltip';

storiesOf('Tooltip', module).add('normal', () => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}
  >
    <Tooltip direction="down">Hola!</Tooltip>
    <Tooltip direction="up">Hola!</Tooltip>
    <Tooltip direction="left">Hola!</Tooltip>
    <Tooltip direction="right">Hola!</Tooltip>
  </div>
));
