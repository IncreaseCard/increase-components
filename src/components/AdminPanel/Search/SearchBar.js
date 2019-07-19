import React from 'react';

import TextInput from '../../TextInput/TextInput';
import BlueButton from '../../Button/BlueButton';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: {} };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fields === this.props.fields) return;
    // eslint-disable-next-line react/no-did-update-set-state
    this.setState({ values: {} });
  }

  handleChange = (value, key) => {
    this.setState({
      values: {
        [key]: value !== '' ? value : undefined
      }
    });
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state.values);
  };

  render() {
    const { title, fields } = this.props;
    return (
      <form>
        <label htmlFor="search">{title}</label>

        {fields.map(({ key, label }) => (
          // eslint-disable-next-line react/jsx-key
          <TextInput
            name={`${key}-Search`}
            onChange={(e) => {
              this.handleChange(e.target.value, key);
            }}
            placeholder={`Buscar por ${label}`}
            value={this.state.values[key] || ''}
          />
        ))}
        <BlueButton onClick={this.handleSubmit}>
          <i className="material-icons">search</i>
        </BlueButton>
      </form>
    );
  }
}

export default SearchBar;
