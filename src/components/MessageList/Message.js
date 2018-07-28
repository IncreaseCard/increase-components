import PropTypes from "prop-types";
import styled from "styled-components";
import newTheme from "../../themes/new";

const Message = styled.div`
  border: 1px solid ${props => props.theme.colors.gray[500]};
  border-radius: 3px;
  padding: 8px;

  ${props => {
    const colors = props.theme.colors;
    switch (props.variant) {
      case "info":
        return `
        background-color: ${colors.lightBlue[500]};
        color: ${colors.white[100]};
      `;
      case "warning":
        return `
        background-color: ${colors.orange[500]};
        color: ${colors.white[100]};
      `;
      case "success":
        return `
        background-color: ${colors.brand.green[700]};
        color: ${colors.white[100]};
      `;
      case "danger":
        return `
        background-color: ${colors.red[500]};
        color: ${colors.white[100]};
      `;
    }
  }};
`;

Message.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["info", "danger", "warning", "success"]).isRequired,
  theme: PropTypes.object
};

Message.defaultProps = {
  theme: newTheme
};

export default Message;
