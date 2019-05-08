import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  width: 100%;

  ${(props) =>
    props.state === 'error' &&
    css`
      border-color: #ff3b3b;
    `};
`;

function Card(props) {
  return <StyledCard {...props}> {props.children} </StyledCard>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  state: PropTypes.oneOf(['error', 'disabled']),
};

export default Card;
