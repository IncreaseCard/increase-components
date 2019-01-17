import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import currentTheme from '../../themes/current';
import Currency from '../Currency/Currency';

const propTypes = {
  amount: PropTypes.number,
  description: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'red', 'green']).isRequired,
  currency: PropTypes.string.isRequired
};

const defaultProps = {
  amount: 0,
  currency: 'ARS',
  color: 'blue'
};

const AmountBoxWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secondary[props.color]};
  color: ${(props) => props.theme.colors.white};
  height: ${(props) => (props.short ? '85px' : '120px')};
  margin-bottom: 20px;
  margin-top: 20px;
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 100%;
`;

AmountBoxWrapper.propTypes = { theme: PropTypes.object, short: PropTypes.bool };
AmountBoxWrapper.defaultProps = { theme: currentTheme };

const AmountBoxAmount = styled.span`
  display: block;
  font-size: ${(props) => props.theme.typography.headingFontSizes[1]};
  font-weight: 300;
  line-height: 85px;
  padding: 0 16px;
`;

AmountBoxAmount.propTypes = {
  theme: PropTypes.object
};

AmountBoxAmount.defaultProps = {
  theme: currentTheme
};

const AmountBoxDescription = styled.p`
  display: block;
  height: 35px;
  line-height: 35px;
  margin: 0;
  background-color: ${(props) => props.theme.colors.mediumShadow};
`;

AmountBoxDescription.propTypes = { theme: PropTypes.object };
AmountBoxDescription.defaultProps = { theme: currentTheme };

export const AmountBox = ({ amount, color, description, currency }) => {
  return (
    <AmountBoxWrapper short={typeof description !== 'string'} color={color}>
      <AmountBoxAmount>
        <Currency value={amount} currency={currency} />
      </AmountBoxAmount>
      {typeof description === 'string' ? (
        <AmountBoxDescription>{description}</AmountBoxDescription>
      ) : null}
    </AmountBoxWrapper>
  );
};

AmountBox.propTypes = propTypes;
AmountBox.defaultProps = defaultProps;

export default AmountBox;
