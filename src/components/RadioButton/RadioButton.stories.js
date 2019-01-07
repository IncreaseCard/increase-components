import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioButton } from './RadioButton';

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 'seleccionado'
    };
  }

  setOption(name) {
    this.setState({ option: name });
  }

  render() {
    return (
      <fieldset style={{ margin: 0, border: 'none' }}>
        <legend id="radioExampleLabel">Opciones</legend>
        <RadioButton
          checked={this.state.option === 'deshabilitado'}
          disabled
          label="Deshabilitado"
          name="radioExample"
          onChange={() => this.setOption('deshabilitado')}
        />
        <RadioButton
          checked={this.state.option === 'normal'}
          label="Normal"
          name="radioExample"
          onChange={() => this.setOption('normal')}
        />
        <RadioButton
          checked={this.state.option === 'seleccionado'}
          label="Seleccionado"
          name="radioExample"
          onChange={() => this.setOption('seleccionado')}
        />
      </fieldset>
    );
  }
}

storiesOf('RadioButton', module).add('normal', () => <Radio />);
