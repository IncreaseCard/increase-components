import styled from 'styled-components';
import PropTypes from 'prop-types';

import defaultTheme from '../../defaultTheme';

const Panel = styled.div`
  box-shadow: 0 1px 2px ${props => props.theme.colors.mediumShadow};
  padding: 8px 16px;
`;

Panel.propTypes = {
  children: PropTypes.object,
  theme: PropTypes.object
};

Panel.defaultProps = {
  theme: defaultTheme
};

export default Panel;
