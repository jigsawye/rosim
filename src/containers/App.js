import React from 'react';
import { Row, Col, Layout } from 'antd';

import BaseInfo from './BaseInfo';
import Status from './Status';
const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header>
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
