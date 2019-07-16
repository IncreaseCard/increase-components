import React from 'react';
import { storiesOf } from '@storybook/react';
import IncreaseLogo from './IncreaseLogo';

// eslint-disable-next-line no-console
const log = (msg: string) => console.log(msg);

storiesOf('IncreaseLogo', module).add('Small', () => {
  return <IncreaseLogo blackAndWhite onClick={(message) => log(message)} size="small" />;
});

storiesOf('IncreaseLogo', module).add('Medium', () => {
  return <IncreaseLogo onClick={(message) => log(message)} size="medium" />;
});

storiesOf('IncreaseLogo', module).add('Big', () => {
  return <IncreaseLogo onClick={(message) => log(message)} size="big" />;
});
