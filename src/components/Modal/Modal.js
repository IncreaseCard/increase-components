import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
// eslint-disable-next-line no-unused-vars
import IconWrapper from '../../icons/Icon';
import { Close as closeIcon } from '../../icons/icons';

import Button from '../Button/BlueButton';
import InvisibleButton from '../Button/InvisibleButton';

const propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  cancelLabel: PropTypes.string,
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
  cancelLabel: 'Cancel',
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

const ActionButtons = ({ fullWidthActionButtons, align, okLabel, onOk, onCancel, cancelLabel }) => {
  if (fullWidthActionButtons || align !== 'left') {
    return (
      <React.Fragment>
        <InvisibleButton onClick={onOk}>{okLabel}</InvisibleButton>
        <Button onClick={onCancel}>{cancelLabel}</Button>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Button onClick={onCancel}>{cancelLabel}</Button>
      <InvisibleButton onClick={onOk}>{okLabel}</InvisibleButton>
    </React.Fragment>
  );
};

const Modal = ({
  align,
  children,
  onClose,
  onOk,
  okLabel,
  cancelLabel,
  customFooter,
  description,
  fullWidthActionButtons,
  headerText,
  shadeClosable,
  shade,
  visible
}) => {
  return visible ? (
    <ModalWrapper
      onClick={() => {
        if (shadeClosable) {
          onClose();
        }
      }}
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
          {customFooter || (
            <ActionButtons
              align={align}
              cancelLabel={cancelLabel}
              fullWidthActionButtons={fullWidthActionButtons}
              okLabel={okLabel}
              onCancel={onClose}
              onOk={onOk}
            />
          )}
        </ModalFooter>
      </ModalBody>
    </ModalWrapper>
  ) : null;
};

Modal.defaultProps = defaultProps;

Modal.propTypes = propTypes;

export default Modal;
