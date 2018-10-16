import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a`
  color: #3b86ff;
  text-decoration: none;
`;

export default Link;

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node
};
