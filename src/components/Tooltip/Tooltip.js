import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  direction: PropTypes.oneOf('up', 'down', 'left', 'right')
};

const defaultProps = {
  direction: 'down'
};

const drawArrow = (props) => {
  switch (props.direction) {
    case 'down':
      return css`
        bottom: -5px;
        left: calc(50% - 7.5px);
        border-left: 7.5px solid transparent;
        border-right: 7.5px solid transparent;
        border-top: 5px solid #d0d3de;
      `;
    case 'up':
      return css`
        top: -8px;
        left: calc(50% - 8px);
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #d0d3de;
      `;
    case 'left':
      return css`
        left: -8px;
        top: calc(50% - 8px);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid #d0d3de;
      `;
    case 'right':
      return css`
        right: -8px;
        top: calc(50% - 8px);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-left: 8px solid #d0d3de;
      `;
  }
};

export const Tooltip = styled.div`
  position: relative;
  font-size: 13px;
  padding: 12px 9px;
  width: 148px;
  background-color: #d0d3de;
  box-shadow: 0 1px 3px #828690;
  border-radius: 3px;

  ::after {
    content: '';
    position: absolute;
    ${drawArrow}
  }
`;

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';

export default Tooltip;
