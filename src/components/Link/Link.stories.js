import React from 'react';

import { storiesOf } from '@storybook/react';

import Link from './Link';

storiesOf('Link', module)
  .add('Regular', () => (
    <>
      <Link href="https://www.google.com.ar">www.google.com.ar</Link>
      <br />
      <Link disabled href="https://www.google.com.ar">
        www.google.com.ar
      </Link>
      <br />
    </>
  ))
  .add('Alert', () => (
    <>
      <Link href="https://www.google.com.ar" variant="alert">
        www.google.com.ar
      </Link>
      <br />
      <Link disabled href="https://www.google.com.ar" variant="alert">
        www.google.com.ar
      </Link>
    </>
  ))
  .add('Target="blank"', () => (
    <Link href="https://www.google.com.ar" target="blank">
      www.google.com.ar
    </Link>
  ));
