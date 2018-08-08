import PropTypes from 'prop-types';
import styled from 'styled-components';

import newTheme from '../../themes/new';

export const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? props.theme.colors.lightBlue[500] : props.theme.colors.white[100]};
  border: 1px solid ${(props) => props.theme.colors.gray[300]};
  border-radius: 3px;
  color: ${(props) =>
    props.active ? props.theme.colors.white[100] : props.theme.colors.black[700]};
  padding: 8px 12px;
  height: 32px;
  cursor: pointer;

  &[disabled] {
    opacity: 0.2;
  }
`;

PaginationButton.propTypes = {
  theme: PropTypes.object,
  active: PropTypes.bool
};

PaginationButton.defaultProps = {
  theme: newTheme,
  active: false
};

export default PaginationButton;
