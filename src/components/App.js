import React from 'react';
import styled from 'styled-components';
import { Row, Col, Layout } from 'antd';

import AppHeader from './Layouts/AppHeader';
import AppFooter from './Layouts/AppFooter';

import BaseInfo from '../containers/BaseInfo';
import Status from '../containers/Status';
import Ability from '../containers/Ability';
import AspdSetting from '../containers/AspdSetting';

const { Content } = Layout;

const AppContent = styled(Content)`
  padding: 30px 50px;
  min-height: calc(100vh - 182px);
`;

const App = () => (
  <Layout>
    <AppHeader />
    <AppContent>
      <Row gutter={16}>
        <Col xs={24} lg={12} xxl={{ span: 9, offset: 3 }}>
          <BaseInfo />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} lg={6} xxl={{ span: 4, offset: 3 }}>
          <Status />
        </Col>
        <Col xs={24} lg={10} xxl={8}>
          <Ability />
        </Col>
        <Col xs={24} lg={8} xxl={6}>
          <AspdSetting />
        </Col>
      </Row>
    </AppContent>
    <AppFooter />
  </Layout>
);

export default App;
