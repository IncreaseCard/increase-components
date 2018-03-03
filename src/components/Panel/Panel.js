import styled from 'styled-components';
import PropTypes from 'prop-types';

import defaultTheme from '../../defaultTheme';

const Panel = styled.div`
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 3px;
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
