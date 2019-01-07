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
            renderDay={(date, inMonth) => (
              <React.Fragment>
                <CalendarData inMonth={inMonth} style={{ color: '#f79c31' }}>
                  <Currency currency="ARS" value={200 * Math.random()} />
                </CalendarData>
                <CalendarData inMonth={inMonth} style={{ color: '#2ca8df' }}>
                  <Currency currency="ARS" value={200 * Math.random()} />
                </CalendarData>
              </React.Fragment>
            )}
            year={2018}
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
        <CalendarData inMonth={inMonth} style={{ color: '#f79c31' }}>
          <Currency currency="ARS" value={200 * Math.random()} />
        </CalendarData>
        <CalendarData inMonth={inMonth} style={{ color: '#2ca8df' }}>
          <Currency currency="ARS" value={250 * Math.random()} />
        </CalendarData>
      </React.Fragment>
    );

    const renderWeeklySummary = () => (
      <React.Fragment>
        <CalendarData inMonth={true} style={{ color: '#f79c31' }}>
          <Currency currency="ARS" value={7 * 200 * Math.random()} />
        </CalendarData>
        <CalendarData inMonth={true} style={{ color: '#2ca8df' }}>
          <Currency currency="ARS" value={5 * 250 * Math.random()} />
        </CalendarData>
      </React.Fragment>
    );
    return (
      <div style={{ backgroundColor: '#FAFAFA', padding: '8px' }}>
        <div style={{ width: '90%', margin: '0 auto' }}>
          <Calendar
            hasWeeklySummary={true}
            month={5}
            renderDay={renderDay}
            renderWeeklySummary={renderWeeklySummary}
            year={2018}
          />
        </div>
      </div>
    );
  });
