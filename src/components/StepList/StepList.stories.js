import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StepList from './StepList';

storiesOf('StepList', module)
  .add(
    'normal',
    withInfo(`Shows a list of steps in a wizard.`)(() => (
      <StepList steps={['Tu comercio', 'Tus tarjetas', 'Resumen']} activeStep={1} />
    ))
  )
  .add(
    'At the start',
    withInfo(`Shows a list of steps in a wizard.`)(() => (
      <StepList steps={['Bienvenida', 'Tu comercio', 'Tus tarjetas', 'Resumen']} activeStep={0} />
    ))
  )
  .add(
    'At the end',
    withInfo(`Shows a list of steps in a wizard.`)(() => (
      <StepList steps={['Bienvenida', 'Tu comercio', 'Tus tarjetas', 'Resumen']} activeStep={3} />
    ))
  );
