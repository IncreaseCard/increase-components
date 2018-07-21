import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import Switch from './Switch';

class SwitchContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.toggle = () => {
      this.setState((prevState) => ({
        value: !prevState.value
      }));
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.defaultValue });
  }

  render() {
    const { name, id } = this.props;
    return <Switch name={name} id={id} onChange={this.toggle} value={this.state.value} />;
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
    <SwitchContainer name="myFlag" id="sw1" defaultValue={false} />
    <SwitchContainer name="myFlag2" id="sw2" defaultValue={true} />
  </div>
));
