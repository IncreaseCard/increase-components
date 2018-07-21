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
          label="Deshabilitado"
          name="radioExample"
          disabled
          checked={this.state.option == 'deshabilitado'}
          onChange={() => this.setOption('deshabilitado')}
        />
        <RadioButton
          label="Normal"
          name="radioExample"
          checked={this.state.option == 'normal'}
          onChange={() => this.setOption('normal')}
        />
        <RadioButton
          label="Seleccionado"
          name="radioExample"
          checked={this.state.option == 'seleccionado'}
          onChange={() => this.setOption('seleccionado')}
        />
      </fieldset>
    );
  }
}

storiesOf('RadioButton', module).add('normal', () => <Radio />);
