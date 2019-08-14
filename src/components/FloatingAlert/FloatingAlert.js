import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlueButton from '../Button/BlueButton';
import InvisibleButton from '../Button/InvisibleButton';

const propTypes = {
  actionText: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

const defaultProps = {};

function FloatingAlert({ actionText, bodyText, cancelText, className, onAction, onCancel }) {
  return (
    <span className={className}>
      <span>{bodyText}</span>
      <span className="buttonGroup">
        <BlueButton onClick={onAction}>{actionText}</BlueButton>
        <InvisibleButton onClick={onCancel}>{cancelText}</InvisibleButton>
      </span>
    </span>
  );
}

FloatingAlert.propTypes = propTypes;
FloatingAlert.defaultProps = defaultProps;

export default styled(FloatingAlert)`
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border: 1px solid rgba(28, 28, 28, 0.15);
  border-radius: 3px;
  padding: 5px 5px 5px 16px;
  font-size: 16px;
  line-height: 20px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  span + span {
    margin-left: 16px;
  }

  .buttonGroup {
    button + button {
      margin-left: 4px;
    }
  }
`;
