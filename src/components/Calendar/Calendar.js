import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { extendMoment } from "moment-range";

import CalendarWrapper from "./CalendarWrapper";
import CalendarHeader from "./CalendarHeader";
import CalendarDay from "./CalendarDay";
import DayNumber from "./DayNumber";

const propTypes = {
  renderDay: PropTypes.func,
  month: PropTypes.number,
  year: PropTypes.number
};

function Calendar({ renderDay, month, year }) {
  moment.locale("es");
  const startDate = moment({ month, year }).startOf("week");
  const endDate = moment({ month, year })
    .endOf("month")
    .endOf("week");
  const momentExtended = extendMoment(moment);
  const days = Array.from(momentExtended.range(startDate, endDate).by("days"));
  return (
    <CalendarWrapper>
      {moment
        .weekdays()
        .map(weekday => (
          <CalendarHeader key={weekday}>{weekday}</CalendarHeader>
        ))}
      {days.map(date => (
        <CalendarDay
          key={date}
          today={date.isSame(moment(), "date")}
          inMonth={date.month() === month}
        >
          <DayNumber today={date.isSame(moment(), "date")}>
            {date.date()}
          </DayNumber>
          {renderDay(
            date,
            date.month() === month,
            date.isSame(moment(), "date")
          )}
        </CalendarDay>
      ))}
    </CalendarWrapper>
  );
}

Calendar.propTypes = propTypes;

export default Calendar;
