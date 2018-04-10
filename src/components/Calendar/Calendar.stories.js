import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Calendar from './Calendar';
import Currency from '../Currency/Currency';
import { defaultTheme } from '../../defaultTheme';

storiesOf('Calendar', module).add('default', () => {
  const CalendarData = styled.div`
    background-color: ${props => props.theme.colors.secondary[props.color]};
    border-radius: 4px;
    color: ${props => props.theme.colors.white};
    margin-bottom: 1px;
    padding: 8px;
  `;

  CalendarData.defaultProps = {
    theme: defaultTheme
  };

  return (
    <Calendar
      month={3}
      year={2018}
      renderDay={(date) => (
        <React.Fragment>
          <CalendarData color={'blue'}><Currency value={200 * Math.random()}/></CalendarData>
          <CalendarData color={'orange'}><Currency value={200 * Math.random()} /></CalendarData>
        </React.Fragment>
      )} />
  );
});
