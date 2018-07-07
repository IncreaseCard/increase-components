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
  background-color: #f2f6f7;
  color: ${(props) => props.theme.colors.primary.blue};
  font-weight: bold;
`;

export default TableHeader;

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;
