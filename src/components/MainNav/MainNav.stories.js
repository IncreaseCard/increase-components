import React from 'react';
import { storiesOf } from '@storybook/react';
import MainNav from './MainNav';
import styled from 'styled-components';

const MainNavStyled = styled(MainNav)`
  width: 1000px;
`;

storiesOf('Main Navigation', module).add('with text', () => (
  <MainNavStyled country="country" products="productos" user="user" />
));
