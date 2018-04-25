import styled from 'styled-components';
import PropTypes from 'prop-types';

import currentTheme from '../../themes/current';

const DayNumber = styled.div`
  background-color: ${(props) => (props.today ? '#8cc63f' : 'transparent')};
  color: ${(props) => (props.today ? props.theme.colors.white : '#A3A3A3')};
  position: absolute;
  right: ${(props) => (props.today ? '2px' : '4px')};
  top: ${(props) => (props.today ? '2px' : '4px')};
  border-radius: 50%;
  padding: ${(props) => (props.today ? '5px' : '3px')};
  height: ${(props) => (props.today ? '25px' : '20px')};
  width: ${(props) => (props.today ? '25px' : '20px')};
  text-align: center;
`;

DayNumber.propTypes = {
  theme: PropTypes.object,
  today: PropTypes.bool
};

DayNumber.defaultProps = {
  theme: currentTheme
};

export default DayNumber;
