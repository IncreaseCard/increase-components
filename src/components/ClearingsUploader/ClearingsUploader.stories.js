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
      disabled={true}
      format={FORMAT}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      onSelect={action('Selected')}
      openModal={action('openModal')}
      progress={0}
      providers={PROVIDERS}
      status={EMPTY}
    />
  ))
  .add('Enabled DropZone (EMPTY - Enabled)', () => (
    <ClearingsUploader
      disabled={false}
      format={FORMAT}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      onSelect={action('Selected')}
      openModal={action('openModal')}
      progress={0}
      providers={PROVIDERS}
      status={EMPTY}
    />
  ))
  .add('Uploading File (UPLOADING)', () => (
    <ClearingsUploader
      disabled={false}
      format={FORMAT}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      onSelect={action('Selected')}
      openModal={action('openModal')}
      progress={33}
      providers={PROVIDERS}
      status={UPLOADING}
    />
  ))
  .add('Upload Complete (COMPLETED)', () => (
    <ClearingsUploader
      disabled={false}
      format={FORMAT}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      onSelect={action('Selected')}
      openModal={action('openModal')}
      progress={100}
      providers={PROVIDERS}
      status={COMPLETED}
    />
  ))
  .add('Upload Error (UPLOAD_ERROR)', () => (
    <ClearingsUploader
      disabled={false}
      format={FORMAT}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      onSelect={action('Selected')}
      openModal={action('openModal')}
      progress={0}
      providers={PROVIDERS}
      status={UPLOAD_ERROR}
    />
  ))
  .add('Upload Error (FILE_TYPE_ERROR)', () => (
    <ClearingsUploader
      disabled={false}
      format={FORMAT}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      onSelect={action('Selected')}
      openModal={action('openModal')}
      progress={0}
      providers={PROVIDERS}
      status={FILE_TYPE_ERROR}
    />
  ));
