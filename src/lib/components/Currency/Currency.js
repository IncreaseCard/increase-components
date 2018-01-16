import PropTypes from 'prop-types';

export default function Currency({ value }) {
  const options = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'ARS'
  }
  const numberFormatter = new Intl.NumberFormat(navigator.language, options);
  return numberFormatter.format(value);
}

Currency.propTypes = {
  value: PropTypes.number
};
