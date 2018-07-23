import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import InvisibleButton from './InvisibleButton';

const buttonEvents = {
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  className: 'some-class'
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
      <div>
        <PrimaryButton {...buttonEvents}>Primary button</PrimaryButton>
        &nbsp;
        <SecondaryButton {...buttonEvents}>Secondary Button</SecondaryButton>
        <InvisibleButton {...buttonEvents}>Invisible Button</InvisibleButton>
      </div>
    ))
  )
  .add(
    'Disabled Button',
    withInfo(`
      Disabled Buttons may be used when the user cannot proceed until input is collected.
    `)(() => (
      <div>
        <PrimaryButton {...buttonEvents} disabled>
          Disabled Primary button
        </PrimaryButton>
        &nbsp;
        <SecondaryButton {...buttonEvents} disabled>
          Disabled Secondary Button
        </SecondaryButton>
        &nbsp;
        <InvisibleButton {...buttonEvents} disabled>
          Disabled Invisible Button
        </InvisibleButton>
      </div>
    ))
  );
