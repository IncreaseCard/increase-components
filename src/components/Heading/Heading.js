import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTheme } from '../../defaultTheme';

const e = React.createElement;
export const Heading = styled(({size, children, ...props}) => e(`h${size}`, props, children))`
  margin: 0;
  font-family: ${props => props.theme.typography.titleFontFamily};
  font-size: ${props => props.theme.typography.headingFontSizes[props.size - 1]};
  line-height: ${props => props.theme.typography.headingLineHeights[props.size - 1]};
  font-weight: bold;
`;

Heading.propTypes = {
  size: propTypes.oneOf([1,2,3,4,5,6])
};

Heading.defaultProps = {
  theme: defaultTheme
};

export default Heading;
