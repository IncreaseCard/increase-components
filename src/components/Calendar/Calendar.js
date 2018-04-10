import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { extendMoment } from 'moment-range';

import defaultTheme from '../../defaultTheme';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const CalendarHeader = styled.div`
  background-color: ${props => props.theme.colors.gray};
  color: #888;
  padding: 16px;
  width: calc(100%/7);
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;
const CalendarDay = styled.div`
  background-color: ${props => props.today ? 'rgba(36, 53, 104, 0.1)' : props.theme.colors.white};
  border-left: 1px solid ${props => props.theme.colors.gray};
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  font-size: 11px;
  text-align: center;
  height: 120px;
  width: calc(100%/7);
  ${props => !props.inMonth ? 'opacity: 0.8;' : null }
  ${props => !props.inMonth ? 'color: #999;' : null }
  &:nth-child(7n) {
    border-right: 1px solid ${props => props.theme.colors.gray}
  }
`;

const DayNumber = styled.div`
  padding: 10px 12px;
  height: 38px;
  text-align: right;
`;

CalendarHeader.defaultProps = {
  theme: defaultTheme
};

CalendarDay.defaultProps = {
  theme: defaultTheme
};

DayNumber.defaultProps = {
  theme: defaultTheme
};

export default function Calendar({renderDay, month, year}) {
  moment.locale('es');
  const momentExtended = extendMoment(moment);
  const startDate = momentExtended({ month, year }).startOf('week');
  const endDate = momentExtended({ month, year }).endOf('month').endOf('week');
  const days = Array.from(momentExtended.range(startDate, endDate).by('days'));
  return (
    <CalendarWrapper>
      {moment.weekdays().map((weekday) =>
        <CalendarHeader key={weekday}>
          {weekday}
        </CalendarHeader>
      )}
      {days.map(date =>
        <CalendarDay
          key={date}
          today={date.isSame(moment(), 'date')}
          inMonth={date.month() === month}
        >
          <DayNumber>{date.date()}</DayNumber>
          {renderDay(date)}
        </CalendarDay>
      )}
    </CalendarWrapper>
  );
}
