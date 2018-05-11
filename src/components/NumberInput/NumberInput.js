import styled from "styled-components";
import PropTypes from "prop-types";

import newTheme from "../../themes/new";

export const NumberInput = styled.input.attrs({
  type: "number"
})`
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 3px;
  font-size: ${props => props.theme.typography.bodyFontSizes[0]};
  line-height: ${props => props.theme.typography.bodyLineHeights[0]};
  width: 4rem;
`;

NumberInput.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object
};

NumberInput.defaultProps = {
  theme: newTheme
};

export default NumberInput;
