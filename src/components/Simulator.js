import React from 'react';
import { Row, Col } from 'antd';

import BaseInfo from '../containers/BaseInfo';
import Status from '../containers/Status';
import Ability from '../containers/Ability';
import AspdSetting from '../containers/AspdSetting';
import MaxHPSP from '../containers/MaxHPSP';

const Simulator = () => (
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
    </Col>
  </Row>
);

export default Simulator;
