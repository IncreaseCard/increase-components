import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from './Heading';

storiesOf('Heading', module)
  .add('normal', () => (
    <div>
      <Heading size="1">Title 1</Heading>
      <Heading size="2">Title 2</Heading>
      <Heading size="3">Title 3</Heading>
      <Heading size="4">Title 4</Heading>
      <Heading size="5">Title 5</Heading>
      <Heading size="6">Title 6</Heading>
    </div>
  ))
  .add('bold', () => (
    <div>
      <Heading size="1" bold>Title 1</Heading>
      <Heading size="2" bold>Title 2</Heading>
      <Heading size="3" bold>Title 3</Heading>
      <Heading size="4" bold>Title 4</Heading>
      <Heading size="5" bold>Title 5</Heading>
      <Heading size="6" bold>Title 6</Heading>
    </div>
  ));
