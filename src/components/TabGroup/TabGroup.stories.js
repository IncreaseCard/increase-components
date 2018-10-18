import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabGroup } from './TabGroup';
import { Tab } from './Tab';

storiesOf('TabGroup', module)
  .add('in 40px container', () => (
    <div style={{ height: '40px' }}>
      <TabGroup>
        <Tab active>Tab activa</Tab>
        <Tab active>Tab activa</Tab>
        <Tab>Tab normal</Tab>
        <Tab disabled>Tab disabled</Tab>
      </TabGroup>
    </div>
  ))
  .add('in 60px container', () => (
    <div style={{ height: '60px' }}>
      <TabGroup>
        <Tab active>Tab activa</Tab>
        <Tab active>Tab activa</Tab>
        <Tab>Tab normal</Tab>
        <Tab disabled>Tab disabled</Tab>
      </TabGroup>
    </div>
  ))
  .add('in 100px container', () => (
    <div style={{ height: '100px' }}>
      <TabGroup>
        <Tab active>Tab activa</Tab>
        <Tab active>Tab activa</Tab>
        <Tab>Tab normal</Tab>
        <Tab disabled>Tab disabled</Tab>
      </TabGroup>
    </div>
  ));
