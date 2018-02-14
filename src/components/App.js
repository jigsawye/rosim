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
        <Col xs={{ span: 12 }} xxl={{ span: 9, offset: 3 }}>
          <BaseInfo />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={{ span: 6 }} xxl={{ span: 4, offset: 3 }}>
          <Status />
        </Col>
        <Col xs={{ span: 10 }} xxl={{ span: 9 }}>
          <Ability />
        </Col>
        <Col xs={{ span: 8 }} xxl={{ span: 8 }}>
          <AspdSetting />
        </Col>
      </Row>
    </AppContent>
    <AppFooter />
  </Layout>
);

export default App;
