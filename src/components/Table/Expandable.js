import React from 'react';
import PropTypes from 'prop-types';

const propTypes = { children: PropTypes.func };
const defaultProps = {};

class Expandable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.toggleExpand = () => this.setState(({ expanded }) => ({ expanded: !expanded }));
  }

  render() {
    return this.props.children(this.state.expanded, this.toggleExpand);
  }
}

Expandable.propTypes = propTypes;
Expandable.defaultProps = defaultProps;

export default Expandable;
