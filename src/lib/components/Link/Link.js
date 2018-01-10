import './Link.css';

import React from 'react';
import PropTypes from 'prop-types';

export default function Link(props) {
  return <a href={props.href}>{props.children}</a>
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.object
};
