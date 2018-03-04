import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioButton } from './RadioButton';

storiesOf('RadioButton')
  .add('normal', () => (
    <div>
      <RadioButton label='Deshabilitado' name="studyDays" disabled />
      <RadioButton label='Normal' name="studyDays" />
      <RadioButton label='Seleccionado' name="studyDays" checked />
    </div>
  ));
