import React from 'react';
import { storiesOf } from '@storybook/react';

import StepList from './StepList';

storiesOf('StepList', module)
  .add('normal', () => (
    <StepList steps={['Tu comercio', 'Tus tarjetas', 'Resumen']} activeStep={1} />
  ))
  .add('At the start', () => (
    <StepList steps={['Bienvenida', 'Tu comercio', 'Tus tarjetas', 'Resumen']} activeStep={0} />
  ))
  .add('At the end', () => (
    <StepList steps={['Bienvenida', 'Tu comercio', 'Tus tarjetas', 'Resumen']} activeStep={3} />
  ));
