import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { action } from '@storybook/addon-actions';

import ClearingsUploaderInfo from './ClearingsUploaderInfo';
import FileUpload from '../FileUpload/FileUpload';
import newTheme from '../../themes/new';

const propTypes = {
  text: PropTypes.object
};

const defaultProps = {
  text: {
    info: {
      title: 'Subí tu liquidacion manualmente para:',
      list_1: 'Incorporar información si detectas un faltante.',
      list_2: 'Recuperar información previa a tu inicio como cliente de IncreaseCard.',
      info: 'La información ya existente no se sobreescribirá'
    },
    input: {
      action_text_1: 'Arrastrá acá el archivo',
      action_text_2: 'o hace click acá y subilo manualmente',
      link: 'Conocé los formatos permitidos'
    }
  }
};

const ClearingsUploaderWrapper = styled.div`
  align-items: center;
  border: 1px solid #E5E5E5;
  display: flex;
  font-family: ${(props) => props.theme.typography.bodyFontFamily};
  height: 270px;
  width: 840px;
`;

const FileUploadWrapper = styled.div`
  width: 350px;
  height: 230px;
  margin: 0 20px 0 20px;
`;

ClearingsUploaderWrapper.propTypes = {
  theme: PropTypes.object
};

ClearingsUploaderWrapper.defaultProps = {
  theme: newTheme
};

export const ClearingsUploader = ({ text }) => {
  return (
    <ClearingsUploaderWrapper>
      <ClearingsUploaderInfo text={text.info}/>
      <FileUploadWrapper>
        <FileUpload
          onDropAccepted={action('onDropAccepted file')}
          onDropRejected={action('onDropRejected file')}
          progress={0}
          status={FileUpload.EMPTY}
        />
      </FileUploadWrapper>
    </ClearingsUploaderWrapper>
  );
}

ClearingsUploader.propTypes = propTypes;
ClearingsUploader.defaultProps = defaultProps;

export default ClearingsUploader;
