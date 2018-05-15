import PropTypes from 'prop-types';

export default function Currency({ value, currency = 'ARS', language = navigator.language }) {
  if (isNaN(value)) {
    return null;
  }
  const options = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency
  };
  const numberFormatter = new Intl.NumberFormat(language, options);
  return numberFormatter.format(value);
}

Currency.propTypes = {
  value: PropTypes.number,
  currency: PropTypes.string,
  language: PropTypes.string
};

Currency.defaultProps = {
  currency: 'ARS'
};
