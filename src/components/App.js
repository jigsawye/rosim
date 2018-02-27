import React from 'react';
import styled from 'styled-components';
import { Row, Col, Layout } from 'antd';

import AppHeader from './Layouts/AppHeader';
import AppFooter from './Layouts/AppFooter';

import Greaso from '../components/Greaso';
import BaseInfo from '../containers/BaseInfo';
import Status from '../containers/Status';
import Ability from '../containers/Ability';
import AspdSetting from '../containers/AspdSetting';
import MaxHPSP from '../containers/MaxHPSP';

const { Content } = Layout;

const AppContent = styled(Content)`
  @media (min-width:992px) {
    padding: 30px 50px;
  }
  min-height: calc(100vh - 182px);
`;

const App = () => (
  <Layout>
    <AppHeader />
    <AppContent>
      <Row gutter={16}>
        <Col xs={24} lg={16} xxl={{ span: 12, offset: 3 }}>
          <BaseInfo />
          <Row gutter={16}>
            <Col lg={24} xl={10}>
              <Status />
            </Col>
            <Col lg={24} xl={14}>
              <Ability />
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={8} xxl={6}>
          <MaxHPSP />
          <AspdSetting />
          <Greaso />
        </Col>
      </Row>
    </AppContent>
    <AppFooter />
  </Layout>
);

export default App;
