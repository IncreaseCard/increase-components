import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from './Panel';

storiesOf('Panel', module).add('with some text', () => (<Panel>Hola!</Panel>));
