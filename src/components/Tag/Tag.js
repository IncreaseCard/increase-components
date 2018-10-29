import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string,
  variant: PropTypes.oneOf(['colorOnWhite', 'whiteOnColor']).isRequired
};

const defaultProps = {
  variant: 'colorOnWhite'
};

const Tag = styled.div`
  ${(props) =>
    props.icon &&
    css`
      &::before {
        content: '';
        display: inline-block;
        mask: url(${props.icon});
        mask-position: center;
        mask-size: 12px;
        background-color: ${props.variant === 'colorOnWhite' ? props.color : 'white'};
        height: 12px;
        width: 12px;
        margin-right: 4px;
      }
    `} display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => (props.variant === 'colorOnWhite' ? props.color : 'white')};
  background-color: ${(props) => (props.variant === 'colorOnWhite' ? 'white' : props.color)};
  font-size: 12px;
  line-height: 18px;
  padding: 1px 7px;
  border-radius: 24px;
`;

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;
Tag.displayName = 'Tag';

export default Tag;
