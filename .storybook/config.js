import '!css-loader!normalize.css';
import { configure } from '@storybook/react';

import '../src/styles/base.css';
// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
