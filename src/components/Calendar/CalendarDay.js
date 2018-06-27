import styled from 'styled-components';

import currentTheme from '../../themes/current';

const CalendarDay = styled.div`
  background-color: ${(props) =>
    props.inMonth ? props.theme.colors.white : props.theme.colors.gray};
  border-left: 1px solid ${(props) => props.theme.colors.gray};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  text-align: center;
  height: 80px;
  width: calc(100% / 7);
  position: relative;
  padding: 16px;

  &:nth-child(7n) {
    border-right: 1px solid ${(props) => props.theme.colors.gray};
  }

  &:hover {
    background-color: #f2f6f7;
  }
`;

CalendarDay.defaultProps = {
  theme: currentTheme
};

export default CalendarDay;
