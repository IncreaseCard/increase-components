// import { storiesOf } from '@storybook/react';
// import FileUpload from './FileUpload';
// import { action } from '@storybook/addon-actions';
// import React from 'react';
//
// storiesOf('Components/common/FileUpload', module)
//   .add('file upload empty state', () => (
//     <FileUpload
//       onDropAccepted={action('onDropAccepted file')}
//       onDropRejected={action('onDropRejected file')}
//       progress={0}
//       status={FileUpload.EMPTY}
//     />
//   ))
//   .add('file upload uploading state', () => (
//     <FileUpload
//       onDropAccepted={action('onDropAccepted file')}
//       onDropRejected={action('onDropRejected file')}
//       progress={33}
//       status={FileUpload.UPLOADING}
//     />
//   ))
//   .add('file upload completed state', () => (
//     <FileUpload
//       onDropAccepted={action('onDropAccepted file')}
//       onDropRejected={action('onDropRejected file')}
//       progress={100}
//       status={FileUpload.COMPLETED}
//     />
//   ))
//   .add('file upload error state', () => (
//     <FileUpload
//       onDropAccepted={action('onDropAccepted file')}
//       onDropRejected={action('onDropRejected file')}
//       progress={0}
//       status={FileUpload.UPLOAD_ERROR}
//     />
//   ))
//   .add('file type error state', () => (
//     <FileUpload
//       onDropAccepted={action('onDropAccepted file')}
//       onDropRejected={action('onDropRejected file')}
//       progress={0}
//       status={FileUpload.FILE_TYPE_ERROR}
//     />
//   ));
