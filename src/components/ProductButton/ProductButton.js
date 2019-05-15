import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewTheme from '../../themes/new';
import Link from '../Link/Link';
import increaseIsotype from '../../icons/increase-isotype.svg';

const ButtonWrapper = styled.div`
  .logoWrapper {
    display: flex;
    align-items: flex-start;
    img {
      height: 44px;
      filter: ${(props) => (props.disabled ? 'grayscale(100%)' : '')};
      opacity: ${(props) => (props.disabled ? '0.5' : '1')};
    }
    .text {
      margin-left: 12px;
      .increase {
        color: ${(props) =>
          props.disabled ? props.theme.colors.whiteTone : props.theme.colors.blackShade};
        font-size: 0.5rem;
        font-weight: 600;
        text-transform: uppercase;
      }
      .product {
        color: ${(props) =>
          props.disabled ? props.theme.colors.whiteTone : props.theme.colors.brandBlueRegular};
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
`;

ButtonWrapper.defaultProps = { theme: NewTheme };

const CTALink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
`;

const ProductButton = ({ productName, CTA, linkCTA, disabled }) => {
  return (
    <ButtonWrapper disabled={disabled}>
      <div className="logoWrapper">
        <img src={increaseIsotype} />
        <div className="text">
          <div className="increase">Increase</div>
          <div className="product">{productName}</div>
        </div>
      </div>
      {linkCTA ? <CTALink href={linkCTA}>{CTA}</CTALink> : ''}
    </ButtonWrapper>
  );
};

ProductButton.propTypes = {
  CTA: PropTypes.string,
  disabled: PropTypes.bool,
  linkCTA: PropTypes.string,
  productName: PropTypes.string.isRequired
};

export default ProductButton;
