import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = {
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme
};

export const TableHeader = styled.thead`
  color: ${(props) => props.theme.colors.brandBlueRegular};
  font-weight: bold;
  vertical-align: bottom;
`;

export default TableHeader;

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;
