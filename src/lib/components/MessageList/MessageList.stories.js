import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MessageList from './MessageList';

const messages = ['Hola', 'Otro mensaje', 'Este es un mensaje mucho más largo, cuidado!'];

storiesOf('MessageList', module).add('with messages', () => <MessageList messages={messages} />);
