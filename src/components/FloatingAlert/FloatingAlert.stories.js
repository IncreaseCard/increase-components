import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import FloatingAlert from './FloatingAlert';

const actionHandlers = actions('onAction', 'onCancel');

storiesOf('FloatingAlert', module).add('with action and cancel text', () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <FloatingAlert
      actionText="Completar"
      bodyText="Tu opinión nos importa. Ayudanos respondiendo esta breve encuesta."
      cancelText="No, gracias"
      {...actionHandlers}
    />
  </div>
));
