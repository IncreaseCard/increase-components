import './AmountBox.css';

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import defaultTheme from '../../defaultTheme';
import Currency from '../Currency/Currency';

const AmountBoxWrapper = styled.div`
  box-shadow: 0 1px 2px ${props => props.theme.colors.darkShadow};
  color: ${props => props.theme.colors.white};
  height: ${props => props.short ? '85px' : '120px'};
  margin-bottom: 20px;
  margin-top: 20px;
  position: relative;
  text-align: center;
  width: 400px;
`;

AmountBoxWrapper.propTypes = { theme: PropTypes.object, short: PropTypes.bool };
AmountBoxWrapper.defaultProps = { theme: defaultTheme };

const AmountBoxAmount = styled.span`
  display: block;
  font-size: 2.85rem;
  font-weight: 300;
  line-height: 85px;
  padding: 0 16px;
`;

const AmountBoxDescription = styled.p`
  display: block;
  height: 35px;
  line-height: 35px;
  margin: 0;
  background-color: ${props => props.theme.colors.mediumShadow};
`;

AmountBoxDescription.propTypes = { theme: PropTypes.object };
AmountBoxDescription.defaultProps = { theme: defaultTheme };


export const AmountBox = ({ amount = 0, color = 'blue', description }) => {
  return(
    <AmountBoxWrapper short={typeof description !== 'string'} className={`AmountBox-${color}`}>
      <AmountBoxAmount>
        <Currency value={amount}/>
      </AmountBoxAmount>
      {
        typeof description === 'string' ?
          <AmountBoxDescription>
            {description}
          </AmountBoxDescription>
          : null
      }
    </AmountBoxWrapper>
  );
};

AmountBox.propTypes = {
  amount: PropTypes.number,
  description: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'red', 'green'])
};

export default AmountBox;
