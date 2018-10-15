import styled from 'styled-components';
import PropTypes from 'prop-types';

import currentTheme from '../../themes/current';

const CalendarDay = styled.div`
  background-color: ${(props) =>
    props.inMonth ? props.theme.colors.white : props.theme.colors.gray};
  border-left: 1px solid ${(props) => props.theme.colors.gray};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  font-size: 11px;
  text-align: center;
  height: 80px;
  width: calc(100% / ${(props) => (props.hasWeeklySummary ? 8 : 7)});
  box-sizing: border-box;
  position: relative;
  padding: 16px;

  &:nth-child(${(props) => (props.hasWeeklySummary ? 8 : 7)}n) {
    border-right: 1px solid ${(props) => props.theme.colors.gray};
  }

  &:hover {
    background-color: #f2f6f7;
  }
`;

CalendarDay.propTypes = {
  hasWeeklySummary: PropTypes.bool
};

CalendarDay.defaultProps = {
  theme: currentTheme
};

export default CalendarDay;
