import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Row, Col, Card, Select, InputNumber, Radio } from 'antd';
import { find } from 'lodash';

import {
  updateAspdWeaponId,
  updateAspdLefthandId,
  updateAspdEqultmentAddition,
  updateAspdSkillAddition,
  updateAspdPotionAddition,
} from '../actions';
import weapons from '../constants/weapons';
import aspdTable from '../constants/aspdTable';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Option } = Select;

const aspdUpPotions = [
  { key: 0, name: '無', aspdUp: 0 },
  { key: 1, name: '集中藥水', aspdUp: 10 },
  { key: 2, name: '覺醒藥水', aspdUp: 15 },
  { key: 3, name: '菠色克藥水', aspdUp: 20 },
];

const Label = styled.div`
  display: inline-block;
  margin-right: 10px;
  font-weight: bold;
  line-height: 32px;
`;

const InputField = styled.div`
  margin-bottom: 10px;
`;

const AspdSetting = ({
  aspd,
  usableWeapons,
  usableLefthand = [],
  updateAspdWeaponId,
  updateAspdLefthandId,
  updateAspdEqultmentAddition,
  updateAspdSkillAddition,
  updateAspdPotionAddition,
}) => (
  <Card title="ASPD Setting" style={{ marginTop: 15 }}>
    <InputField>
      <Row>
        <Col xs={12}>
          <Label>主要</Label>
          <Select style={{ width: 100 }} value={aspd.weaponId} onChange={updateAspdWeaponId}>
            {usableWeapons.map(({ id, baseAspd }) => (
              <Option key={id} value={id}>{weapons.find(weapon => weapon.id === id).name}</Option>)
            )}
          </Select>
        </Col>
        <Col xs={12}>
          <Label>副手</Label>
          <Select
            style={{ width: 100 }}
            value={aspd.lefthandId}
            onChange={updateAspdLefthandId}
            disabled={!weapons.find(weapon => weapon.id === aspd.weaponId).lefthand}>
            <Option key={100} value={100}>無</Option>
            <Option key={101} value={101}>盾</Option>
            {usableLefthand.map(({ id, baseAspd }) => (
              <Option key={id} value={id}>{weapons.find(weapon => weapon.id === id).name}</Option>)
            )}
          </Select>
        </Col>
      </Row>
    </InputField>
    <InputField>
      <Label>裝備提升攻速</Label>
      <InputNumber
        min={0}
        max={200}
        value={aspd.equltmentsAddition}
        onChange={updateAspdEqultmentAddition} /> %
    </InputField>
    <InputField>
      <Label>技能提升攻速</Label>
      <InputNumber
        min={0}
        max={200}
        value={aspd.skillsAddition}
        onChange={updateAspdSkillAddition}/> %
    </InputField>
    <InputField>
      <RadioGroup value={aspd.potionAddition} onChange={({ target }) => updateAspdPotionAddition(target.value)}>
        {aspdUpPotions.map(({ key, name, aspdUp }) => (
          <RadioButton key={key} value={aspdUp}>{name}</RadioButton>
        ))}
      </RadioGroup>
    </InputField>
  </Card>
);

const mapStateToProps = ({ job, stats, aspd }) => ({
  usableWeapons: find(aspdTable, ['job', job[1]]).weapons,
  usableLefthand: find(aspdTable, ['job', job[1]]).lefthand,
  stats,
  aspd,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateAspdWeaponId,
  updateAspdLefthandId,
  updateAspdEqultmentAddition,
  updateAspdSkillAddition,
  updateAspdPotionAddition,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AspdSetting);
