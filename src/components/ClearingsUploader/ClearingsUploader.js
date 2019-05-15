import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Select from '../Select/Select';
import SelectItem from '../Select/SelectItem';
import FileUpload from '../FileUpload/FileUpload';
import newTheme from '../../themes/new';

const EMPTY = 'EMPTY';
const UPLOADING = 'UPLOADING';
const COMPLETED = 'COMPLETED';
const UPLOAD_ERROR = 'UPLOAD_ERROR';
const FILE_TYPE_ERROR = 'FILE_TYPE_ERROR';

const propTypes = {
  messages: PropTypes.shape({
    step_1: PropTypes.string,
    step_2: PropTypes.string,
    modal: PropTypes.string,
    action_text_1: PropTypes.string,
    action_text_2: PropTypes.string,
    link: PropTypes.string,
    drag_here: PropTypes.string,
    or: PropTypes.string,
    click_here: PropTypes.string,
    manual_text: PropTypes.string,
    uploading: PropTypes.string,
    upload_success: PropTypes.string,
    upload_failure: PropTypes.string,
    format_error: PropTypes.string,
    retry: PropTypes.string
  }).isRequired,
  provider: PropTypes.string,
  providers: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  format: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  onDropAccepted: PropTypes.func,
  onDropRejected: PropTypes.func,
  onRetry: PropTypes.func,
  openModal: PropTypes.func,
  progress: PropTypes.number,
  status: PropTypes.oneOf([COMPLETED, EMPTY, UPLOADING, UPLOAD_ERROR, FILE_TYPE_ERROR]).isRequired
};

const defaultProps = {
  messages: {
    step_1: '1. Elegí la procesadora',
    step_2: '2. Subí tu archivo',
    modal: 'Conocé los formatos permitidos',
    action_text_1: 'Arrastrá acá el archivo',
    action_text_2: 'o hace click acá y subilo manualmente',
    link: 'Conocé los formatos permitidos',
    drag_here: 'Arrastrá acá el archivo',
    or: 'o hace ',
    click_here: 'click acá',
    manual_text: ' y subilo manualmente',
    uploading: 'Subiendo archivo',
    upload_success: 'Archivo subido',
    upload_failure: 'El archivo no subió correctamente',
    format_error: 'El tipo de archivo no es valido',
    retry: 'Intentar de nuevo'
  },
  providers: [],
  disabled: true
};

const ClearingsUploaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.typography.bodyFontFamily};
`;

const FileUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  justify-content: center;
  width: 350px;
  padding: 20px;
  margin: 10px;
`;

const StyledP = styled.p`
  color: #243568;
  display: inline;
  font-size: 20px;
  margin: 0 0 20px 0;
`;

const StyledA = styled.button`
  background: none;
  border: none;
  color: #3b86ff;
  text-decoration: underline;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  margin: 10px;
`;

ClearingsUploaderWrapper.propTypes = {
  theme: PropTypes.object
};

ClearingsUploaderWrapper.defaultProps = {
  theme: newTheme
};

export const ClearingsUploader = ({
  messages,
  providers,
  disabled,
  format,
  onSelect,
  onDropAccepted,
  onDropRejected,
  onRetry,
  provider,
  openModal,
  progress,
  status
}) => {
  const ListItems = providers.map((item) => {
    return <SelectItem text={item} value={item} key={item} />;
  });
  return (
    <ClearingsUploaderWrapper>
      <FileUploadWrapper>
        <StyledP>{messages.step_1}</StyledP>
        <Select id="provider" onChange={onSelect} provider={provider}>
          {ListItems}
        </Select>
      </FileUploadWrapper>
      <FileUploadWrapper>
        <StyledP>{messages.step_2}</StyledP>
        <FileUpload
          format={format}
          messages={messages}
          onDropAccepted={onDropAccepted}
          onDropRejected={onDropRejected}
          onRetry={onRetry}
          progress={progress}
          status={status}
          disabled={disabled}
        />
        <StyledA onClick={openModal}>{messages.modal}</StyledA>
      </FileUploadWrapper>
    </ClearingsUploaderWrapper>
  );
};

ClearingsUploader.propTypes = propTypes;
ClearingsUploader.defaultProps = defaultProps;

export default ClearingsUploader;
