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
  .add('Primary Buttons',
    withInfo(
      `
        Buttons are used to initialize an action, either in the background or
        foreground of an experience.
        Primary buttons should be used for the principle call to action
        on the page. Modify the behavior of the button by changing its event properties.
        Small buttons may be used when there is not enough space for a
        regular sized button. This issue is most found in tables. Small button should have three words
        or less.
        The example below shows Primary Button component .
    `)(
      () => (
        <div>
          <Button {...buttonEvents} className="some-class">
            Primary button
          </Button>
          &nbsp;
          <Button {...buttonEvents} href="#" className="some-class">
            Primary link
          </Button>
          &nbsp;
        </div>
      )
    )
  )
  .add('Secondary Buttons',
    withInfo(
      `
        Buttons are used to initialize an action, either in the background or
        foreground of an experience. Secondary buttons should be used for secondary actions on each page.
        Modify the behavior of the button by changing its property events.
        The example below shows a Secondary Button component.
    `)(
      () => (
        <div>
          <Button kind="secondary" {...buttonEvents} className="some-class">
            Secondary button
          </Button>
          &nbsp;
          <Button
            kind="secondary"
            {...buttonEvents}
            href="#"
            className="some-class">
            Secondary link
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
          <Button size="sm" {...buttonEvents} className="some-class">
            Small primary button
          </Button>
          &nbsp;
          <Button size="sm" {...buttonEvents} kind="secondary">
            Small secondary Button
          </Button>
          &nbsp;
          <Button
            size="sm"
            {...buttonEvents}
            kind="ghost"
            icon="add--glyph"
            iconDescription="Add">
            Small ghost Button
          </Button>
          &nbsp;
          <Button size="sm" {...buttonEvents} kind="danger">
            Small danger Button
          </Button>
          &nbsp;
          <Button size="sm" {...buttonEvents} href="#" className="some-class">
            Small primary link
          </Button>
        </div>
      )
    )
  )
  .add('Big Buttons',
  withInfo(`
      Small buttons may be used when there is not enough vertical space for a regular sized button. This issue is most
      commonly found in tables. Small buttons should have three words or less.
    `)(
    () => (
      <div>
        <Button size="lg" {...buttonEvents} className="some-class">
          Small primary button
          </Button>
        &nbsp;
          <Button size="lg" {...buttonEvents} kind="secondary">
          Small secondary Button
          </Button>
        &nbsp;
          <Button
          size="lg"
          {...buttonEvents}
          kind="ghost"
          icon="add--glyph"
          iconDescription="Add">
          Small ghost Button
          </Button>
        &nbsp;
          <Button size="lg" {...buttonEvents} kind="danger">
          Small danger Button
          </Button>
        &nbsp;
          <Button size="lg" {...buttonEvents} href="#" className="some-class">
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
          <Button {...buttonEvents} disabled>
            Disabled button
          </Button>
        </div>
      )
    )
  )
  .add('Ghost Buttons',
    withInfo(`
      Buttons are used to initialize an action, either in the background or
      foreground of an experience. Danger buttons should be used for a negative action (such as Delete)
      on the page. Modify the behavior of the button by changing its event properties. The example below
      shows an enabled Danger Button component.
    `)(
      () => (
        <div>
          <Button
            kind="ghost"
            className="some-class"
            icon="add--glyph"
            iconDescription="Add"
            {...buttonEvents}>
            Ghost button
          </Button>
          &nbsp;
          <Button
            kind="ghost"
            href="#"
            className="some-class"
            icon="add--glyph"
            iconDescription="Add"
            {...buttonEvents}>
            Ghost link
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
          <Button kind="danger" {...buttonEvents} className="some-class">
            Danger button
          </Button>
          &nbsp;
          <Button kind="danger" {...buttonEvents} href="#" className="some-class">
            Danger link
          </Button>
        </div>
      )
    )
  );
