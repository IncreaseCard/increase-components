import PropTypes from "prop-types";
import styled from "styled-components";

import newTheme from "../../themes/new";

export const PaginationButton = styled.button`
  background-color: ${props =>
    props.active
      ? props.theme.colors.secondary.blue
      : props.theme.colors.white};
  ${props =>
    props.active
      ? `border: 1px solid ${props.theme.colors.secondary.blue};`
      : `border: 1px solid ${props.theme.colors.gray};`} border-radius: 3px;
  color: ${props =>
    props.active ? props.theme.colors.white : props.theme.colors.black};
  padding: 8px 12px;

  &:hover:not([disabled]) {
    background-color: ${props => props.theme.colors.secondary.blue};
    color: ${props => props.theme.colors.white};
    ${props => (props.active ? null : "cursor: pointer")};
  }

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
