import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { CSSTransition } from 'react-transition-group';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import { Close as CloseIcon } from 'styled-icons/material/Close';
import newTheme from '../../themes/new';
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
  .modal-enter & {
    opacity: 0;
  }
  .modal-enter-active & {
    opacity: 1;
    transition: opacity 200ms ease-out;
  }
  .modal-exit & {
    opacity: 1;
  }
  .modal-exit-active & {
    opacity: 0;
    transition: opacity 200ms ease-out;
  }
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
  .modal-enter & {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  .modal-enter-active & {
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }
  .modal-exit & {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  .modal-exit-active & {
    opacity: 0;
    transform: translate(-50%, -100%);
    transition: opacity 200ms ease-out, transform 200ms ease-out;
  }
`;

const IconButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 9px;
  right: 9px;
  & svg {
    fill: ${(props) => props.theme.colors.whiteShade};
  }
`;

const CloseButton = ({ onClick }) => {
  return (
    <IconButton as="a" onClick={onClick}>
      <CloseIcon size={24} />
    </IconButton>
  );
};

class Modal extends React.Component {
  getOrderedButtons() {
    const { fullWidthActionButtons, align, okLabel, onOk, onCancel, cancelLabel } = this.props;
    const buttons = [
      <CancelButton key="cancelButton" onClick={onCancel} ref={this.setFocus} tabIndex={1}>
        {cancelLabel}
      </CancelButton>,
      <OkButton key="okButton" onClick={onOk} tabIndex={2}>
        {okLabel}
      </OkButton>
    ];
    return fullWidthActionButtons || align !== 'left' ? buttons : buttons.reverse();
  }

  setFocus = (elem) => {
    if (elem) {
      elem.focus();
    }
  };

  handleShadeClick = () => {
    if (this.props.shadeClosable) {
      this.props.onClose();
    }
  };

  handleEscKey = (e) => {
    if (e.key === 'Escape' && this.props.closeOnEscape) {
      this.props.onClose();
    }
  };

  render() {
    const {
      align,
      children,
      onClose,
      customFooter,
      description,
      fullWidthActionButtons,
      headerText,
      shade,
      visible
    } = this.props;
    return (
      <CSSTransition classNames="modal" in={visible} mountOnEnter timeout={200} unmountOnExit>
        <ThemeProvider theme={newTheme}>
          <ModalWrapper
            onClick={this.handleShadeClick}
            onKeyUp={(e) => this.handleEscKey(e)}
            tabIndex={-1}
          >
            {shade && <Shade />}
            <RemoveScrollBar />
            <ModalBody onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={onClose} />
              <ModalHeader align={align}>{headerText}</ModalHeader>
              <ModalContent align={align}>
                <p>{description}</p>
                {children}
              </ModalContent>
              <ModalFooter align={align} fullWidthActionButtons={fullWidthActionButtons}>
                {customFooter || this.getOrderedButtons()}
              </ModalFooter>
            </ModalBody>
          </ModalWrapper>
        </ThemeProvider>
      </CSSTransition>
    );
  }
}

Modal.defaultProps = defaultProps;

Modal.propTypes = propTypes;

export default (props) => {
  return ReactDOM.createPortal(<Modal {...props} />, document.body);
};
