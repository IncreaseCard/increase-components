import './AmountBox.css';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Currency from '../Currency/Currency';

export const AmountBox = ({ amount = 0, color = 'blue', description }) => {
  const amountBoxClassNames = classNames('AmountBox', {
    [`AmountBox-${color}`]: color,
    'AmountBox-short': !(typeof description == 'string')
  });
  return(
    <div className={amountBoxClassNames}>
      <span className="AmountBox-amount">
        <Currency value={amount}/>
      </span>
      {
        typeof description == 'string' ?
          <p className="AmountBox-description">
            {description}
          </p>
          : null
      }
    </div>
  );
};

AmountBox.propTypes = {
  amount: PropTypes.number,
  description: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'red', 'green'])
};

export default AmountBox;
