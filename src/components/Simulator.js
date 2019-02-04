import React from 'react';
import { Col, Row } from 'antd';

import Ability from '../containers/Ability';
import AspdSetting from '../containers/AspdSetting';
import BaseInfo from '../containers/BaseInfo';
import MaxHPSP from '../containers/MaxHPSP';
import SkillBuff from '../containers/SkillBuff';
import Status from '../containers/Status';

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
      <SkillBuff />
      <AspdSetting />
      <MaxHPSP />
    </Col>
  </Row>
);

export default Simulator;
