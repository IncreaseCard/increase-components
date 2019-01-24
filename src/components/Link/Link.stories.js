import React from 'react';

import { storiesOf } from '@storybook/react';

import Link from './Link';

storiesOf('Link', module).add('to a normal url', () => (
  <>
    <Link href="https://www.google.com.ar">www.google.com.ar</Link>
    <Link disabled href="https://www.google.com.ar">
      www.google.com.ar
    </Link>
    <Link href="https://www.google.com.ar" variant="alert">
      www.google.com.ar
    </Link>
    <Link disabled href="https://www.google.com.ar" variant="alert">
      www.google.com.ar
    </Link>
  </>
));
