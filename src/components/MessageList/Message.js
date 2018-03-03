import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTheme } from '../../defaultTheme';

const Message = styled.div`
  border: 1px solid ${props => props.theme.colors.gray};
  padding: 8px;

  ${props => {
    const colors = props.theme.colors;
    switch(props.variant) {
      case 'info': return `
        background-color: ${colors.secondary.blue};
        color: ${colors.white};
      `;
      case 'warning': return `
        background-color: ${colors.secondary.orange};
        color: ${colors.white};
      `;
      case 'success': return `
        background-color: ${colors.secondary.green};
        color: ${colors.white};
      `;
      case 'danger': return `
        background-color: ${colors.secondary.red};
        color: ${colors.white};
      `;
    }
  }}
`;

Message.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['info', 'danger', 'warning', 'success']).isRequired,
  theme: PropTypes.object
};

Message.defaultProps = {
  theme: defaultTheme
};

export default Message;
