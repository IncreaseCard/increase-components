import React from 'react';
import { storiesOf } from '@storybook/react';

import StepList from './StepList';

storiesOf('StepList', module)
  .add('normal', () => (
    <StepList activeStep={1} steps={['Tu comercio', 'Tus tarjetas', 'Resumen']} />
  ))
  .add('At the start', () => (
    <StepList activeStep={0} steps={['Bienvenida', 'Tu comercio', 'Tus tarjetas', 'Resumen']} />
  ))
  .add('At the end', () => (
    <StepList activeStep={3} steps={['Bienvenida', 'Tu comercio', 'Tus tarjetas', 'Resumen']} />
  ));
