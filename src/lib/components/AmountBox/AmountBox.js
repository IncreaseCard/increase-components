import './AmountBox.css';
import React from 'react';
import PropTypes from 'prop-types';

export const AmountBox = (props) => {
  return(
    <div className={`AmountBox AmountBox-${ props.color }`}>
      <span className="AmountBox-amount">
        $ { props.amount }
      </span>
      <p className="AmountBox-description">
        { props.text }
      </p>
    </div>
  );
};

AmountBox.propTypes = {
  amount: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string
};

export default AmountBox;
