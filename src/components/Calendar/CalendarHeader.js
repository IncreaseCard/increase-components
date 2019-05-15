import styled from 'styled-components';
import PropTypes from 'prop-types';

import currentTheme from '../../themes/current';

const CalendarHeader = styled.div`
  background-color: #f2f6f7;
  color: #333;
  border: 1px solid #ddd;
  padding: 8px;
  width: calc(100% / ${(props) => (props.hasWeeklySummary ? 8 : 7)});
  box-sizing: border-box;
  font-size: 11px;
  font-weight: 400;
  text-align: center;
  text-transform: capitalize;

  &:not(:nth-child(${(props) => (props.hasWeeklySummary ? 8 : 7)}n)) {
    border-right: none;
  }
`;

CalendarHeader.propTypes = {
  hasWeeklySummary: PropTypes.bool
};

CalendarHeader.defaultProps = {
  theme: currentTheme
};

export default CalendarHeader;
