import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ButtonBase } from './ButtonBase';
import newTheme from '../../themes/new';

const propTypes = {
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number
};

const defaultProps = {
  disabled: false,
  theme: newTheme
};

const InvisibleButtonChildren = styled.div`
  box-sizing: border-box;
`;

const InvisibleButtonWrapper = styled(ButtonBase)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.lightBlueRegular};

  &:hover:not([disabled]) {
    background-color: ${(props) => props.theme.colors.whiteTint};
    ${InvisibleButtonChildren} {
      border-bottom: 2px solid ${(props) => props.theme.colors.brandGreenRegular};
    }
  }
`;

InvisibleButtonWrapper.propTypes = propTypes;

InvisibleButtonWrapper.defaultProps = defaultProps;

function InvisibleButton({ children, ...rest }) {
  return (
    <InvisibleButtonWrapper {...rest}>
      <InvisibleButtonChildren>{children}</InvisibleButtonChildren>
    </InvisibleButtonWrapper>
  );
}

InvisibleButton.propTypes = { ...propTypes, children: PropTypes.node };
InvisibleButton.defaultProps = defaultProps;
export default InvisibleButton;
