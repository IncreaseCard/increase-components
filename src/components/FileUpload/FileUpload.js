import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import uploadArrow from './upload_arrow.png';
import complete from './complete.png';

import styled from 'styled-components';

import ProgressBar from './ProgressBar';
import Card from './Card';
import LinkButton from './LinkButton';

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
  font-weight: 600;
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

FileUpload.EMPTY = 'EMPTY';
FileUpload.UPLOADING = 'UPLOADING';
FileUpload.COMPLETED = 'COMPLETED';
FileUpload.UPLOAD_ERROR = 'UPLOAD_ERROR';
FileUpload.FILE_TYPE_ERROR = 'FILE_TYPE_ERROR';

const propTypes = {
  messages: PropTypes.objectOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
  format: PropTypes.array.isRequired,
  onDropAccepted: PropTypes.func.isRequired,
  onDropRejected: PropTypes.func.isRequired,
  onRetry: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  status: PropTypes.oneOf([
    FileUpload.COMPLETED,
    FileUpload.EMPTY,
    FileUpload.UPLOADING,
    FileUpload.UPLOAD_ERROR,
    FileUpload.FILE_TYPE_ERROR
  ]).isRequired
};

const defaultProps = {
  format: ['.csv', '.txt'],
  progress: 0,
  status: FileUpload.EMPTY
};

function FileUpload({
  messages,
  disabled,
  status,
  format,
  onDropAccepted,
  onDropRejected,
  progress,
  onRetry
}) {
  const handleDropAccepted = (event) => {
    onDropAccepted(event[0]);
  };

  const handleDropRejected = (event) => {
    onDropRejected(event);
  };

  const UploadImage = <UploadImg alt="upload arrow" src={uploadArrow} />;
  const cardState = disabled ? 'disabled' : 'ok';

  switch (status) {
    case FileUpload.EMPTY:
      return (
        <Card state={cardState}>
          <Dropzone
            accept={format}
            disableClick={true}
            multiple={false}
            onDropAccepted={handleDropAccepted}
            onDropRejected={handleDropRejected}
            style={{}}
          >
            {UploadImage}
            <div>
              <ActionMessage>{messages.drag_here}</ActionMessage>
              <CenterDiv>
                <ManualMessage>{messages.or}</ManualMessage>
                <DropZoneFile
                  accept={format}
                  disabled={disabled}
                  multiple={false}
                  onDropAccepted={handleDropAccepted}
                  onDropRejected={handleDropRejected}
                >
                  {messages.click_here}
                </DropZoneFile>
                <ManualMessage>{messages.manual_text}</ManualMessage>
              </CenterDiv>
            </div>
          </Dropzone>
        </Card>
      );

    case FileUpload.UPLOADING:
      return (
        <Card state={cardState}>
          {UploadImage}
          <ActionMessage>{messages.uploading}</ActionMessage>
          <ProgressBar progress={progress} />
        </Card>
      );

    case FileUpload.COMPLETED:
      return (
        <Card state={cardState}>
          <UploadImg alt="complete" src={complete} />
          <ActionMessage>{messages.upload_success}</ActionMessage>
          <ProgressBar progress={100} />
        </Card>
      );

    case FileUpload.UPLOAD_ERROR:
      return (
        <Card state="error">
          {UploadImage}
          <ErrorMessage>{messages.upload_failure}</ErrorMessage>
          <CenterDiv>
            <LinkButton onClick={onRetry}>{messages.retry}</LinkButton>
          </CenterDiv>
        </Card>
      );

    case FileUpload.FILE_TYPE_ERROR:
      return (
        <Card state="error">
          {UploadImage}
          <ErrorMessage>{messages.format_error}</ErrorMessage>
          <CenterDiv>
            <LinkButton onClick={onRetry}>{messages.retry}</LinkButton>
          </CenterDiv>
        </Card>
      );

    default:
      throw new Error(`Unknown status: ${status}`);
  }
}

FileUpload.propTypes = propTypes;
FileUpload.defaultProps = defaultProps;

export default FileUpload;
