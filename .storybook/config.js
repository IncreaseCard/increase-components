import '!css-loader!normalize.css';
import '../src/styles/base.css';
import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator((story) => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '16px'
    }}
  >
    {story()}
  </div>
));
addDecorator(checkA11y);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
