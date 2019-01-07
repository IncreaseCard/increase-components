import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import Switch from './Switch';

class SwitchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    };
    this.toggle = () => {
      this.setState((prevState) => ({
        value: !prevState.value
      }));
    };
  }

  render() {
    const { name, id } = this.props;
    return <Switch id={id} name={name} onChange={this.toggle} value={this.state.value} />;
  }
}

SwitchContainer.propTypes = {
  defaultValue: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

SwitchContainer.defaultProps = {
  defaultValue: false
};

storiesOf('Switch', module).add('normal', () => (
  <div>
    <SwitchContainer defaultValue={false} id="sw1" name="myFlag" />
    <SwitchContainer defaultValue={true} id="sw2" name="myFlag2" />
  </div>
));
