import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button/BlueButton';

const ModalLauncher = () => {
  const [showStandard, setShowStandard] = useState(false);
  const [showC2A, setShowC2A] = useState(false);

  const toggleStandard = () => {
    setShowStandard(!showStandard);
  };

  const toggleC2A = () => {
    setShowC2A(!showC2A);
  };

  return (
    <React.Fragment>
      <Button onClick={toggleStandard}>Standard modal</Button>
      <Button onClick={toggleC2A}>C2A modal</Button>
      <Modal
        align="left"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunts ut labore et dolore magna aliqua."
        headerText="Este es el header"
        onCancel={toggleStandard}
        onClose={toggleStandard}
        onOk={toggleStandard}
        visible={showStandard}
      />
      <Modal
        align="left"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        fullWidthActionButtons
        headerText="Este es el header"
        onCancel={toggleC2A}
        onClose={toggleC2A}
        onOk={toggleC2A}
        visible={showC2A}
      />
    </React.Fragment>
  );
};

storiesOf('Modal', module).add('Simple Modal', () => <ModalLauncher />);
