import React from 'react';
import styled from 'styled-components';
import { Layout, Row, Col } from 'antd';

import RoSimLogo from '../../assets/rosim.png';
import SaveLoad from '../../containers/SaveLoad';

const { Header } = Layout;

const RoSimHeader = styled(Header)`
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
`;

const AppHeader = () => (
  <RoSimHeader>
    <Row gutter={16}>
      <Col xs={24} md={6} lg={5} xxl={4}>
        <img src={RoSimLogo} alt="RoSim Logo"/>
      </Col>
      <Col xs={0} md={18} lg={19} xxl={20}>
        <SaveLoad />
      </Col>
    </Row>
  </RoSimHeader>
);

export default AppHeader;
