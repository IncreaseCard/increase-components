import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Calendar from './Calendar';
import Currency from '../Currency/Currency';

storiesOf('Calendar', module)
  .add('default', () => {
    const CalendarData = styled.div`
      ${(props) => (!props.inMonth ? 'opacity: 0.5' : null)};
      margin-bottom: 1px;
      padding: 4px;
    `;

    return (
      <div style={{ backgroundColor: '#FAFAFA', padding: '8px' }}>
        <div style={{ width: '90%', margin: '0 auto' }}>
          <Calendar
            month={5}
            year={2018}
            renderDay={(date, inMonth) => (
              <React.Fragment>
                <CalendarData style={{ color: '#f79c31' }} inMonth={inMonth}>
                  <Currency value={200 * Math.random()} currency="ARS" />
                </CalendarData>
                <CalendarData style={{ color: '#2ca8df' }} inMonth={inMonth}>
                  <Currency value={200 * Math.random()} currency="ARS" />
                </CalendarData>
              </React.Fragment>
            )}
          />
        </div>
      </div>
    );
  })
  .add('with weekly summary', () => {
    const CalendarData = styled.div`
      ${(props) => (!props.inMonth ? 'opacity: 0.5' : null)};
      margin-bottom: 1px;
      padding: 4px;
    `;
    const renderDay = (date, inMonth) => (
      <React.Fragment>
        <CalendarData style={{ color: '#f79c31' }} inMonth={inMonth}>
          <Currency value={200 * Math.random()} currency="ARS" />
        </CalendarData>
        <CalendarData style={{ color: '#2ca8df' }} inMonth={inMonth}>
          <Currency value={250 * Math.random()} currency="ARS" />
        </CalendarData>
      </React.Fragment>
    );

    const renderWeeklySummary = () => (
      <React.Fragment>
        <CalendarData style={{ color: '#f79c31' }} inMonth={true}>
          <Currency value={7 * 200 * Math.random()} currency="ARS" />
        </CalendarData>
        <CalendarData style={{ color: '#2ca8df' }} inMonth={true}>
          <Currency value={5 * 250 * Math.random()} currency="ARS" />
        </CalendarData>
      </React.Fragment>
    );
    return (
      <div style={{ backgroundColor: '#FAFAFA', padding: '8px' }}>
        <div style={{ width: '90%', margin: '0 auto' }}>
          <Calendar
            month={5}
            year={2018}
            hasWeeklySummary={true}
            renderDay={renderDay}
            renderWeeklySummary={renderWeeklySummary}
          />
        </div>
      </div>
    );
  });
