import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loading } from './Loading';

storiesOf('Loading', module)
  .add('normal', () => <Loading />)
  .add('small', () => <Loading size={'small'} />)
  .add('custom color', () => <Loading color="black" />);
