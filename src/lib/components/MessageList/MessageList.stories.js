import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageList from './MessageList';

const messages = ['Hola', 'Otro mensaje', 'Este es un mensaje mucho más largo, cuidado!'];

storiesOf('MessageList', module).add('with messages', () => <MessageList messages={messages} />);
