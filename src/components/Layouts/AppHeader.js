import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import SaveLoad from '../../containers/SaveLoad';

const { Header } = Layout;

const Logo = styled.div`
  display: none;
  font-size: 20px;
  color: #FFF;
  @media (min-width:992px) {
    display: inline-block;
  }
`;

const AppHeader = () => (
  <Header>
    <Logo>RO Stats Simulator</Logo>
    <SaveLoad />
  </Header>
);

export default AppHeader;
