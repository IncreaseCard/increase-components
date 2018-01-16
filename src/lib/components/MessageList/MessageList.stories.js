import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageList from './MessageList';

const messages = [
  { text: 'Hola', id: 1 },
  { text: 'Otro mensaje', id: 10, variant: 'warning'},
  {
    text: `
      Este es un mensaje mucho más largo, cuidado!
      Pero mucho más largo.
      Mucho
    `,
    id: 11,
    variant: 'danger'
  },
  { text: 'Otro mensaje', id: 10, variant: 'success' },
];

storiesOf('MessageList', module).add('with messages', () => <MessageList messages={messages} />);
