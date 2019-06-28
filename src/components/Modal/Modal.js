import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import IconWrapper from '../../icons/Icon';
import { Close as closeIcon } from '../../icons/icons';

import OkButton from '../Button/BlueButton';
import CancelButton from '../Button/ButtonBase';

const propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  cancelLabel: PropTypes.string,
  closeOnEscape: PropTypes.bool,
  customFooter: PropTypes.array,
  description: PropTypes.string,
  fullWidthActionButtons: PropTypes.bool,
  headerText: PropTypes.string,
  okLabel: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onOk: PropTypes.func,
  shade: PropTypes.bool,
  shadeClosable: PropTypes.bool
};

const defaultProps = {
  align: 'left',
  okLabel: 'Continuar',
  cancelLabel: 'Cancelar',
  closeOnEscape: true,
  fullWidthActionButtons: false,
  shadeClosable: true,
  shade: true
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
const Shade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: calc(100vw - 30px);
  background-color: white;
  border-radius: 3px;
`;

const Icon = styled(IconWrapper)`
  display: block;
`;

const IconButton = styled.button`
  cursor: pointer;
  position: absolute;
  margin: 10px;
  top: 4px;
  right: 4px;
`;

const CloseButton = ({ onClick }) => {
  return (
    <IconButton as="a" onClick={onClick}>
      <Icon src={closeIcon} />
    </IconButton>
  );
};

class Modal extends React.Component {
  getOrderedButtons = () => {
    const { fullWidthActionButtons, align, okLabel, onOk, onCancel, cancelLabel } = this.props;
    const buttons = [
      <CancelButton key="cancelButton" onClick={onCancel} ref={this.setFocus} tabIndex={1}>
        {cancelLabel}
      </CancelButton>,
      <OkButton key="okButton" onClick={onOk} tabIndex={2}>
        {okLabel}
      </OkButton>
    ];
    if (fullWidthActionButtons || align !== 'left') {
      return buttons;
    }
    return buttons.reverse();
  };

  setFocus(elem) {
    if (elem) {
      elem.focus();
    }
  }

  render() {
    const {
      align,
      children,
      onClose,
      closeOnEscape,
      customFooter,
      description,
      fullWidthActionButtons,
      headerText,
      shadeClosable,
      shade,
      visible
    } = this.props;
    return visible ? (
      <ModalWrapper
        onClick={() => {
          if (shadeClosable) {
            onClose();
          }
        }}
        onKeyDown={(e) => {
          if (closeOnEscape && e.key === 'Escape') {
            onClose();
          }
        }}
        tabIndex={-1}
      >
        {shade && <Shade />}
        <ModalBody onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose} />
          <ModalHeader align={align}>{headerText}</ModalHeader>
          <ModalContent align={align}>
            {description}
            {children}
          </ModalContent>
          <ModalFooter align={align} fullWidthActionButtons={fullWidthActionButtons}>
            {customFooter || this.getOrderedButtons()}
          </ModalFooter>
        </ModalBody>
      </ModalWrapper>
    ) : null;
  }
}

Modal.defaultProps = defaultProps;

Modal.propTypes = propTypes;

export default (props) => {
  return ReactDOM.createPortal(<Modal {...props} />, document.body);
};
