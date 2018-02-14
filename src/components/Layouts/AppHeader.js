import React from 'react';
import styled from 'styled-components';
import { Row, Col, Layout } from 'antd';

import SaveLoad from '../../containers/SaveLoad';

const { Header } = Layout;

const Logo = styled.div`
  font-size: 20px;
  color: #FFF;
`;

const AppHeader = () => (
  <Header>
    <Row gutter={16}>
      <Col span={4}>
        <Logo>RO Stats Simulator</Logo>
      </Col>
      <Col offset={16} span={4}>
        <SaveLoad />
      </Col>
    </Row>
  </Header>
);

export default AppHeader;
