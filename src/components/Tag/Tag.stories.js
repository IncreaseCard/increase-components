import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from './Tag';
import icCheckCircle from 'material-design-icons/action/svg/production/ic_check_circle_24px.svg';
import icAccessAlarm from 'material-design-icons/device/svg/production/ic_access_alarm_24px.svg';
import icRemoveCircle from 'material-design-icons/content/svg/production/ic_remove_circle_24px.svg';

storiesOf('Tag', module)
  .add('with icon', () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '800px'
      }}
    >
      <Tag color="#27C027" icon={icCheckCircle}>
        Habilitada
      </Tag>
      <Tag color="#F79B31" icon={icAccessAlarm}>
        Vencida
      </Tag>
      <Tag color="#ED2331" icon={icRemoveCircle}>
        Bloqueada
      </Tag>
      <Tag color="#27C027" icon={icCheckCircle} variant="whiteOnColor">
        Habilitada
      </Tag>
      <Tag color="#F79B31" icon={icAccessAlarm} variant="whiteOnColor">
        Vencida
      </Tag>
      <Tag color="#ED2331" icon={icRemoveCircle} variant="whiteOnColor">
        Bloqueada
      </Tag>
    </div>
  ))
  .add('simplified', () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '800px'
      }}
    >
      <Tag color="#27C027">Habilitada</Tag>
      <Tag color="#F79B31">Vencida</Tag>
      <Tag color="#ED2331">Bloqueada</Tag>
      <Tag color="#27C027" variant="whiteOnColor">
        Habilitada
      </Tag>
      <Tag color="#F79B31" variant="whiteOnColor">
        Vencida
      </Tag>
      <Tag color="#ED2331" variant="whiteOnColor">
        Bloqueada
      </Tag>
    </div>
  ));
