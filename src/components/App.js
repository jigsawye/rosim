import React from 'react';
import styled from 'styled-components';
import { Row, Col, Layout, Icon } from 'antd';

import BaseInfo from '../containers/BaseInfo';
import Status from '../containers/Status';
import SaveLoad from '../containers/SaveLoad';
const { Header, Content, Footer } = Layout;

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
        <SaveLoad></SaveLoad>
      </Col>
    </Row>
  </Header>
);

const AppFooter = () => (
  <Footer style={{ textAlign: 'center' }}>
    <p>
      Developed with <Icon type="heart" /> by <a href="https://github.com/jigsawye" target="__blank">Evan Ye</a>.
    </p>
    <p>
      <a href="https://github.com/jigsawye/ro-stats-simulator" target="__blank">
        <Icon type="github" /> Source Code
      </a>
    </p>
  </Footer>
);

const App = () => (
  <Layout>
    <AppHeader />
    <Content style={{ padding: '30px 50px', minHeight: 'calc(100vh - 182px)' }}>
      <Row gutter={16}>
        <Col span={12}>
          <BaseInfo></BaseInfo>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Status></Status>
        </Col>
      </Row>
    </Content>
    <AppFooter />
  </Layout>
);

export default App;
