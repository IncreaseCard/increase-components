import React from 'react';

import Table from '../Table/Table';

export default class Show extends React.Component {
  renderFields = (data, fields) => {
    return Object.entries(fields).map(([fieldName, { label, content, type }]) => {
      return (
        <table key={data.id}>
          <tr>
            <td>{label}</td>
            <td>{this.renderField(type, content, data[fieldName])}</td>
          </tr>
          <hr />
        </table>
      );
    });
  };

  renderField = (type, content, fieldValue) => {
    if (type === 'nested') {
      // we need to render a list of (sub-)elements
      return <Table data={fieldValue} fields={content} />;
    }
    if (type === 'object') {
      // we are rendering an object
      return this.renderFields(fieldValue, content);
    }
    const FieldComponent = content;
    return <FieldComponent value={fieldValue} />; // a raw value like a string or number
  };

  render() {
    return (
      <React.Fragment>
        <this.props.queryData id={this.props.match.params.id}>
          {(data) => this.renderFields(data, this.props.fields)}
        </this.props.queryData>
      </React.Fragment>
    );
  }
}
