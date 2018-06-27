import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { extendMoment } from 'moment-range';

import CalendarWrapper from './CalendarWrapper';
import CalendarHeader from './CalendarHeader';
import CalendarDay from './CalendarDay';
import DayNumber from './DayNumber';

const propTypes = {
  renderDay: PropTypes.func,
  month: PropTypes.number,
  year: PropTypes.number,
  hasWeeklySummary: PropTypes.bool,
  renderWeeklySummary: PropTypes.func
};

const defaultProps = {
  hasWeeklySummary: false
};

moment.defineLocale('es-AR', {
  parentLocale: 'es',
  week: {
    dow: 0
  }
});
moment.locale('es-AR');

function Calendar({ renderDay, month, year, hasWeeklySummary, renderWeeklySummary }) {
  const startDate = moment({ month, year }).startOf('week');
  const endDate = moment({ month, year })
    .endOf('month')
    .endOf('week');
  const momentExtended = extendMoment(moment);
  const days = Array.from(momentExtended.range(startDate, endDate).by('days'));
  return (
    <CalendarWrapper>
      {moment.weekdays().map((weekday) => (
        <CalendarHeader key={weekday} hasWeeklySummary={hasWeeklySummary}>
          {weekday}
        </CalendarHeader>
      ))}
      {hasWeeklySummary && <CalendarHeader hasWeeklySummary={true}>Total</CalendarHeader>}
      {days.map((date) => (
        <React.Fragment key={date}>
          <CalendarDay
            today={date.isSame(moment(), 'date')}
            inMonth={date.month() === month}
            hasWeeklySummary={hasWeeklySummary}
          >
            <DayNumber today={date.isSame(moment(), 'date')}>{date.date()}</DayNumber>
            {renderDay(date, date.month() === month, date.isSame(moment(), 'date'))}
          </CalendarDay>
          {hasWeeklySummary &&
            date.day() === 6 && (
              <CalendarDay inMonth={true} today={false} hasWeeklySummary={true}>
                {renderWeeklySummary(moment(date).startOf('week'), moment(date).endOf('week'))}
              </CalendarDay>
            )}
        </React.Fragment>
      ))}
    </CalendarWrapper>
  );
}

Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

export default Calendar;
