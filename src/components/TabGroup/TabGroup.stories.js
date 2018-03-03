import React from 'react';
import { storiesOf } from "@storybook/react";
import { TabGroup } from "./TabGroup";
import { Tab } from "../Tab/Tab";

storiesOf('TabGroup', module)
  .add('normal', () => (
    <TabGroup>
      <Tab active>
        Tab activa
      </Tab>
      <Tab>
        Tab normal
      </Tab>
      <Tab disabled>
        Tab disabled
      </Tab>
    </TabGroup>

  ));
