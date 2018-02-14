import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import SaveLoad from '../../containers/SaveLoad';

const { Header } = Layout;

const Logo = styled.div`
  display: inline-block;
  font-size: 20px;
  color: #FFF;
`;

const AppHeader = () => (
  <Header>
    <Logo>RO Stats Simulator</Logo>
    <SaveLoad />
  </Header>
);

export default AppHeader;
