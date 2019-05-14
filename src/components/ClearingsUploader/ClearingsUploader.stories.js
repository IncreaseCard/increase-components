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
const MESSAGES = {
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
};
const OPTIONS = [
  { text: 'option 1', value: 1 },
  { text: 'option 2', value: 2 },
  { text: 'option 3', value: 3 }
];

storiesOf('ClearingsUploader', module)
  .add('Initial State (EMPTY - Disabled)', () => (
    <ClearingsUploader
      format={FORMAT}
      messages={MESSAGES}
      options={OPTIONS}
      disabled={true}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      progress={0}
      status={EMPTY}
    />
  ))
  .add('Enabled DropZone (EMPTY - Enabled)', () => (
    <ClearingsUploader
      format={FORMAT}
      messages={MESSAGES}
      options={OPTIONS}
      disabled={false}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      progress={0}
      status={EMPTY}
    />
  ))
  .add('Uploading File (UPLOADING)', () => (
    <ClearingsUploader
      format={FORMAT}
      messages={MESSAGES}
      options={OPTIONS}
      disabled={false}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      progress={33}
      status={UPLOADING}
    />
  ))
  .add('Upload Complete (COMPLETED)', () => (
    <ClearingsUploader
      format={FORMAT}
      messages={MESSAGES}
      options={OPTIONS}
      disabled={false}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      progress={100}
      status={COMPLETED}
    />
  ))
  .add('Upload Error (UPLOAD_ERROR)', () => (
    <ClearingsUploader
      format={FORMAT}
      messages={MESSAGES}
      options={OPTIONS}
      disabled={false}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      progress={0}
      status={UPLOAD_ERROR}
    />
  ))
  .add('Upload Error (FILE_TYPE_ERROR)', () => (
    <ClearingsUploader
      format={FORMAT}
      messages={MESSAGES}
      options={OPTIONS}
      disabled={false}
      onDropAccepted={action('onDropAccepted file')}
      onDropRejected={action('onDropRejected file')}
      openModal={action('openModal')}
      progress={0}
      status={FILE_TYPE_ERROR}
    />
  ));
