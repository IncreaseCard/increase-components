import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import newTheme from '../../themes/new';

const propTypes = {
  text: PropTypes.object,
  theme: PropTypes.object
};

const defaultProps = {
  text: {
    title: 'Subí tu liquidacion manualmente para:',
    list_1: 'Incorporar información si detectas un faltante.',
    list_2: 'Recuperar información previa a tu inicio como cliente de IncreaseCard.',
    info: 'La información ya existente no se sobreescribirá'
  },
  theme: newTheme
};

const ClearingsUploaderInfoWrapper = styled.div`
  border-right: 1px solid #E5E5E5;
  width: 410px;
  height: 230px;
  margin: 20px;
`;

export const ClearingsUploaderInfo = ({ text }) => {
  return (
    <ClearingsUploaderInfoWrapper>
      <h3>
        {text.title}
      </h3>
      <ul>
        <li>{text.list_1}</li>
        <li>{text.list_2}</li>
      </ul>
      <p>{text.info}</p>
    </ClearingsUploaderInfoWrapper>
  );
}

ClearingsUploaderInfo.propTypes = propTypes;
ClearingsUploaderInfo.defaultProps = defaultProps;

export default ClearingsUploaderInfo;
