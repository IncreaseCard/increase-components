import styled from 'styled-components';

import currentTheme from '../../themes/current';

const CalendarHeader = styled.div`
  background-color: #f2f6f7;
  color: #333;
  border: 1px solid #ddd;
  padding: 8px;
  width: calc(100% / 7);
  font-size: 11px;
  font-weight: normal;
  text-align: center;
  text-transform: capitalize;

  &:not(:nth-child(7n)) {
    border-right: none;
  }
`;

CalendarHeader.defaultProps = {
  theme: currentTheme
};

export default CalendarHeader;
