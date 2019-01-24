import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = {
  number: PropTypes.bool,
  theme: PropTypes.object
};

const defaultProps = {
  theme: newTheme,
  number: false
};

export const TableHead = styled.th`
  padding: 20px 10px;
  text-align: ${(props) => (props.number ? 'right' : 'left')};
`;

export default TableHead;

TableHead.propTypes = propTypes;
TableHead.defaultProps = defaultProps;
