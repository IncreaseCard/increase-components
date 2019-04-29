import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../Link/Link';

const propTypes = {
  action: PropTypes.shape({ href: PropTypes.string, text: PropTypes.string }),
  className: PropTypes.string,
  createdAt: PropTypes.string,
  message: PropTypes.string
};

const defaultProps = {};

export function Notification({ className, message, createdAt, action }) {
  return (
    <div className={className}>
      <header>{relativeTime(Date.parse(createdAt))}</header>
      <main>{message}</main>
      <footer>
        <Link href={action.href}>{action.text}</Link>
      </footer>
    </div>
  );
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default styled(Notification)`
  padding: 15px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #d8d8d8;
  }

  header {
    font-size: 15px;
    font-weight: 500;
    color: #b1b1b1;
  }
  main {
    margin-top: 10px;
    margin-bottom: 15px;
  }
`;

const intlRelativeTimeFormatter = new Intl.RelativeTimeFormat();

function relativeTime(previous, current = new Date()) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  let amount, unit;
  if (elapsed < msPerMinute) {
    amount = Math.round(elapsed / 1000);
    unit = 'seconds';
  } else if (elapsed < msPerHour) {
    amount = Math.round(elapsed / msPerMinute);
    unit = 'minutes';
  } else if (elapsed < msPerDay) {
    amount = Math.round(elapsed / msPerHour);
    unit = 'hours';
  } else if (elapsed < msPerMonth) {
    amount = Math.round(elapsed / msPerDay);
    unit = 'days';
  } else if (elapsed < msPerYear) {
    amount = Math.round(elapsed / msPerMonth);
    unit = 'months';
  } else {
    amount = Math.round(elapsed / msPerYear);
    unit = 'years';
  }
  return intlRelativeTimeFormatter.format(-amount, unit);
}
