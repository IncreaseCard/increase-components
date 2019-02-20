import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import PrimaryButton from './PrimaryButton';
import BlueButton from './BlueButton';
import GreenButton from './GreenButton';
import RedButton from './RedButton';
import InvisibleButton from './InvisibleButton';
import styled from 'styled-components';

const Buttons = styled.div`
  margin-bottom: 2rem;
  h1 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
  }
  button {
    margin-right: 1rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const buttonEvents = {
  onClick: action('onClick'),
  onFocus: action('onFocus')
};

storiesOf('Buttons', module)
  .add(
    'Buttons',
    withInfo(
      `
        Buttons are used to initialize an action, either in the background or
        foreground of an experience.
        Primary buttons should be used for the principle call to action on the page.
        Secondary buttons should be used for secondary actions on each page.
        Modify the behavior of the button by changing its event properties.
    `
    )(() => (
      <>
        <Buttons>
          <h1>Active Buttons</h1>
          <PrimaryButton {...buttonEvents}>PrimaryButton</PrimaryButton>
          <BlueButton {...buttonEvents}>BlueButton</BlueButton>
          <GreenButton {...buttonEvents}>GreenButton</GreenButton>
          <RedButton {...buttonEvents}>RedButton</RedButton>
          <InvisibleButton {...buttonEvents}>InvisibleButton</InvisibleButton>
        </Buttons>
      </>
    ))
  )
  .add(
    'Disabled Button',
    withInfo(`
      Disabled Buttons may be used when the user cannot proceed until input is collected.
    `)(() => (
      <>
        <Buttons>
          <h1>Disabled Buttons</h1>
          <PrimaryButton disabled {...buttonEvents}>
            PrimaryButton
          </PrimaryButton>
          <BlueButton disabled {...buttonEvents}>
            BlueButton
          </BlueButton>
          <GreenButton disabled {...buttonEvents}>
            GreenButton
          </GreenButton>
          <RedButton disabled {...buttonEvents}>
            RedButton
          </RedButton>
          <InvisibleButton disabled {...buttonEvents}>
            InvisibleButton
          </InvisibleButton>
        </Buttons>
      </>
    ))
  );
