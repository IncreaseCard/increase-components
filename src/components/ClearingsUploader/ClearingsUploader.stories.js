import React from 'react';
import { storiesOf } from '@storybook/react';

import ClearingsUploader from './ClearingsUploader';

storiesOf('ClearingsUploader', module).add('normal', () => (
  <div>
    <ClearingsUploader/>
  </div>
));
