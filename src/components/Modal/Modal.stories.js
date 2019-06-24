import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button/BlueButton';

const ModalLauncher = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      <Button onClick={toggleModal}>Show modal</Button>
      <Modal
        align="left"
        customActions={[
          <Button key="test" onClick={toggleModal}>
            botoni
          </Button>
        ]}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua."
        fullWidthActionButtons
        headerText="Este es el header"
        onCancel={toggleModal}
        onClose={toggleModal}
        onOk={toggleModal}
        visible={showModal}
      />
    </React.Fragment>
  );
};

storiesOf('Modal', module).add('Simple Modal', () => <ModalLauncher />);
