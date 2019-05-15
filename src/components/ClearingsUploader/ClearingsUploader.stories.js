import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ClearingsUploader from './ClearingsUploader';

const EMPTY = 'EMPTY';
const UPLOADING = 'UPLOADING';
const COMPLETED = 'COMPLETED';
const UPLOAD_ERROR = 'UPLOAD_ERROR';
const FILE_TYPE_ERROR = 'FILE_TYPE_ERROR';
const FORMAT = ['.csv', '.pdf'];
const PROVIDERS = ['visa', 'mastercard', 'cabal'];

storiesOf('ClearingsUploader', module)
  .add('Initial State (EMPTY - Disabled)', () => (
    <ClearingsUploader
      format={FORMAT}
      disabled={true}
      onSelect={action('Selected')}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      providers={PROVIDERS}
      progress={0}
      status={EMPTY}
    />
  ))
  .add('Enabled DropZone (EMPTY - Enabled)', () => (
    <ClearingsUploader
      format={FORMAT}
      disabled={false}
      onSelect={action('Selected')}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      providers={PROVIDERS}
      progress={0}
      status={EMPTY}
    />
  ))
  .add('Uploading File (UPLOADING)', () => (
    <ClearingsUploader
      format={FORMAT}
      disabled={false}
      onSelect={action('Selected')}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      providers={PROVIDERS}
      progress={33}
      status={UPLOADING}
    />
  ))
  .add('Upload Complete (COMPLETED)', () => (
    <ClearingsUploader
      format={FORMAT}
      disabled={false}
      onSelect={action('Selected')}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      providers={PROVIDERS}
      progress={100}
      status={COMPLETED}
    />
  ))
  .add('Upload Error (UPLOAD_ERROR)', () => (
    <ClearingsUploader
      format={FORMAT}
      disabled={false}
      onSelect={action('Selected')}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      providers={PROVIDERS}
      progress={0}
      status={UPLOAD_ERROR}
    />
  ))
  .add('Upload Error (FILE_TYPE_ERROR)', () => (
    <ClearingsUploader
      format={FORMAT}
      disabled={false}
      onSelect={action('Selected')}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      providers={PROVIDERS}
      progress={0}
      status={FILE_TYPE_ERROR}
    />
  ));
