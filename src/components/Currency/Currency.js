import PropTypes from 'prop-types';

const propTypes = {
  currency: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  value: PropTypes.number
};

const defaultProps = {};

export default function Currency({ value, currency, language }) {
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

Currency.propTypes = propTypes;

Currency.defaultProps = defaultProps;
