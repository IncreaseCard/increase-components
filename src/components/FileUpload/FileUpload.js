import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import uploadArrow from './upload_arrow.png';
import complete from './complete.png';

import styled from 'styled-components';

import ProgressBar from './ProgressBar';
import Card from './Card';
import LinkButton from './LinkButton';
import classnames from 'classnames';

const CenteredH2 = styled.h2`
  text-align: center;
`;

const UploadImg = styled.img`
  width: 85px;
  display: block;
  margin: 10px auto;
`;

const P = styled.p`
  margin: 0;
  text-align: center;
`;

const ActionMessage = styled(P)`
  font-weight: bold;
`;

const ErrorMessage = styled(P)`
  font-size: 13px;
  color: #ff3b3b;
`;
const ManualMessage = styled(P)`
  color: #aaaaaa;
  display: inline;
`;

const DropZoneFile = styled(Dropzone)`
  display: inline;
  color: #3b86ff;
  text-decoration: underline;
  cursor: pointer;
`;

const CenterDiv = styled.div`
  text-align: center;
`;

const StyledCard = styled(Card)`
  &.disabled {
    opacity: 0.5;
  }
`;

FileUpload.EMPTY = 'EMPTY';
FileUpload.UPLOADING = 'UPLOADING';
FileUpload.COMPLETED = 'COMPLETED';
FileUpload.UPLOAD_ERROR = 'UPLOAD_ERROR';
FileUpload.FILE_TYPE_ERROR = 'FILE_TYPE_ERROR';

const propTypes = {
  disabled: PropTypes.bool,
  onDropAccepted: PropTypes.func.isRequired,
  onDropRejected: PropTypes.func.isRequired,
  onRetry: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  status: PropTypes.oneOf([
    FileUpload.COMPLETED,
    FileUpload.EMPTY,
    FileUpload.UPLOADING,
    FileUpload.UPLOAD_ERROR,
    FileUpload.FILE_TYPE_ERROR,
  ]),
};

const defaultProps = {
  progress: 0,
  status: FileUpload.EMPTY,
};

function FileUpload({
  disabled,
  status,
  onDropAccepted,
  onDropRejected,
  progress,
  onRetry,
}) {
  const handleDropAccepted = (event) => {
    onDropAccepted(event[0]);
  };

  const handleDropRejected = (event) => {
    onDropRejected(event);
  };

  const UploadMessage = <CenteredH2>{'step_1_upload_file'}</CenteredH2>;
  const UploadImage = <UploadImg alt="upload arrow" src={uploadArrow} />;
  const cardClassNames = classnames({ disabled: disabled });

  switch (status) {
    case FileUpload.EMPTY:
      return (
        <StyledCard className={cardClassNames}>
          <Dropzone
            accept={['.csv', '.txt']}
            disableClick={true}
            multiple={false}
            onDropAccepted={handleDropAccepted}
            onDropRejected={handleDropRejected}
            style={{}}
          >
            {UploadMessage}
            {UploadImage}
            <div>
              <ActionMessage>{'drag_file_to_conciliate'}</ActionMessage>
              <CenterDiv>
                <ManualMessage>{'step_1_or_do'}</ManualMessage>
                <DropZoneFile
                  accept={['.csv', '.txt']}
                  disabled={disabled}
                  multiple={false}
                  onDropAccepted={handleDropAccepted}
                  onDropRejected={handleDropRejected}
                >
                  {'step_1_click_here'}
                </DropZoneFile>
              </CenterDiv>
            </div>
          </Dropzone>
        </StyledCard>
      );

    case FileUpload.UPLOADING:
      return (
        <StyledCard className={cardClassNames}>
          {UploadMessage}
          {UploadImage}
          <ActionMessage>{'file_uploading'}</ActionMessage>
          <ProgressBar progress={progress} />
        </StyledCard>
      );

    case FileUpload.COMPLETED:
      return (
        <StyledCard className={cardClassNames}>
          {UploadMessage}
          <UploadImg alt="complete" src={complete} />
          <ActionMessage>{'file_upload_complete'}</ActionMessage>
          <ProgressBar progress={100} />
        </StyledCard>
      );

    case FileUpload.UPLOAD_ERROR:
      return (
        <StyledCard className={cardClassNames} state="error">
          {UploadMessage}
          {UploadImage}
          <ErrorMessage>{'file_upload_error'}</ErrorMessage>
          <CenterDiv>
            <LinkButton onClick={onRetry}>{'file_upload_retry'}</LinkButton>
          </CenterDiv>
        </StyledCard>
      );

    case FileUpload.FILE_TYPE_ERROR:
      return (
        <StyledCard className={cardClassNames} state="error">
          {UploadMessage}
          {UploadImage}
          <ErrorMessage>{'file_upload_invalid_file_type'}</ErrorMessage>
          <CenterDiv>
            <LinkButton onClick={onRetry}>{'file_upload_retry'}</LinkButton>
          </CenterDiv>
        </StyledCard>
      );

    default:
      throw new Error(`Unknown status: ${status}`);
  }
}

FileUpload.propTypes = propTypes;
FileUpload.defaultProps = defaultProps;

export default FileUpload;
