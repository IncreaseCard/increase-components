import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from './Button';

const buttonEvents = {
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  className: 'some-class',
};

storiesOf('Buttons', module)
  .add('Buttons',
    withInfo(
      `
        Buttons are used to initialize an action, either in the background or
        foreground of an experience.
        Primary buttons should be used for the principle call to action on the page.
        Secondary buttons should be used for secondary actions on each page.
        Modify the behavior of the button by changing its event properties.
    `)(
      () => (
        <div>
          <Button {...buttonEvents} primary>
            Primary button
          </Button>
          &nbsp;
          <Button {...buttonEvents}>
            Secondary Button
          </Button>
          &nbsp;
          <Button {...buttonEvents} href="#" primary>
            Primary link
          </Button>
        </div>
      )
    )
  )
  .add('Small Buttons',
    withInfo(`
      Small buttons may be used when there is not enough vertical space for a regular sized button. This issue is most
      commonly found in tables. Small buttons should have three words or less.
    `)(
      () => (
        <div>
          <Button small {...buttonEvents} primary>
            Small primary button
          </Button>
          &nbsp;
          <Button small {...buttonEvents}>
            Small secondary Button
          </Button>
          &nbsp;
          <Button small {...buttonEvents} href="#" primary>
            Small primary link
          </Button>
        </div>
      )
    )
  )
  .add('Disabled Button',
    withInfo(`
      Disabled Buttons may be used when the user cannot proceed until input is collected.
    `)(
      () => (
        <div>
          <Button {...buttonEvents} primary disabled>
            Disabled Primary button
          </Button>
          &nbsp;
          <Button {...buttonEvents} disabled>
            Disabled Secondary Button
          </Button>
        </div>
      )
    )
  )
  .add('Danger Buttons',
    withInfo(`
      Buttons are used to initialize an action, either in the background or
      foreground of an experience. Danger buttons should be used for a negative action (such as Delete)
      on the page. Modify the behavior of the button by changing its event properties. The example below
      shows an enabled Danger Button component.
    `)(
      () => (
        <div>
          <Button {...buttonEvents} primary danger>
            Danger button
          </Button>
          &nbsp;
          <Button {...buttonEvents} danger>
            Danger button
          </Button>
          &nbsp;
          <Button {...buttonEvents} href="#" primary danger>
            Danger link
          </Button>
        </div>
      )
    )
  );
