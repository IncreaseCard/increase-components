import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loading } from './Loading';
console.log(Loading.propTypes);

storiesOf('Loading')
  .add('normal', () => (
    <Loading/>
  ))
  .add('small', () => (
    <Loading small/>
  ));
