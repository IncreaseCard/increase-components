import React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module).add('with some label', () => <Checkbox label="Soy bueno"/>);
storiesOf('Checkbox', module).add('disabled', () => <Checkbox label="Soy bueno" disabled/>);
