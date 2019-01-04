import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../Link/Link';
import increaseIsotype from '../../icons/increase-isotype.svg';

const ButtonWrapper = styled.div`
  .logoWrapper {
    display: flex;
    align-items: flex-start;
    img {
      filter: ${(props) => (props.disabled ? 'grayscale(100%)' : '')};
      opacity: ${(props) => (props.disabled ? '0.5' : '1')};
    }
    .text {
      margin-left: 12px;
      .increase {
        color: ${(props) => (props.disabled ? '#D8D8D8' : '#000')};
        font-size: 0.5rem;
        font-weight: 700;
        text-transform: uppercase;
      }
      .product {
        color: ${(props) => (props.disabled ? '#D8D8D8' : '#223368')};
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
  }
  .cta {
    margin-top: 1rem;
  }
`;

const CrossButton = ({ productName, CTA, linkCTA, disabled }) => {
  return (
    <ButtonWrapper disabled={disabled}>
      <div className="logoWrapper">
        <img src={increaseIsotype} style={{ height: '25px' }} />
        <div className="text">
          <div className="increase">Increase</div>
          <div className="product">{productName}</div>
        </div>
      </div>
      <div className="cta">
        <Link href={linkCTA}>{CTA}</Link>
      </div>
    </ButtonWrapper>
  );
};

CrossButton.propTypes = {
  productName: PropTypes.string.isRequired,
  CTA: PropTypes.string,
  linkCTA: PropTypes.string,
  disabled: PropTypes.bool
};

export default CrossButton;
