import React from 'react';
import styled from 'styled-components';
import { Row, Col, Layout } from 'antd';

import BaseInfo from '../containers/BaseInfo';
import Status from '../containers/Status';
import SaveLoad from '../containers/SaveLoad';
const { Header, Content, Footer } = Layout;

const Logo = styled.div`
  font-size: 20px;
  color: #FFF;
`;

const App = () => (
  <Layout>
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
    <Content style={{ padding: '30px 50px' }}>
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
    <Footer></Footer>
  </Layout>
);

export default App;
