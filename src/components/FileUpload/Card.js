import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Card = styled.div`
  height: 150px;
  justify-content: center;
  width: 100%;

  ${(props) =>
    props.state === 'disabled' &&
    css`
      opacity: 0.5;
    `};
`;

Card.propTypes = {
  children: PropTypes.node,
  state: PropTypes.oneOf(['error', 'disabled', 'ok'])
};

Card.defaultProps = {
  state: 'ok'
};

export default Card;
