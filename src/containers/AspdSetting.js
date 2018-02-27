import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Select, InputNumber, Radio } from 'antd';
import { find } from 'lodash';

import { Card, Label, InputField } from '../components/Layouts/CardLayout';
import {
  updateAspdWeaponId,
  updateAspdLefthandId,
  updateAspdEquipMod,
  updateAspdEquipFixed,
  updateAspdSkillMod,
  updateAspdPotionMod,
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

const AspdSetting = ({
  aspd,
  usableWeapons,
  usableLefthand = [],
  updateAspdWeaponId,
  updateAspdLefthandId,
  updateAspdEquipMod,
  updateAspdEquipFixed,
  updateAspdSkillMod,
  updateAspdPotionMod,
}) => (
  <Card title="ASPD Setting">
    <InputField>
      <Row>
        <Col xs={12}>
          <Label>主要</Label>
          <Select style={{ width: 100 }} value={aspd.weaponId} onChange={updateAspdWeaponId}>
            {usableWeapons.map(({ id, baseAspd }) => (
              <Option key={id} value={id}>{find(weapons, { id }).name}</Option>)
            )}
          </Select>
        </Col>
        <Col xs={12}>
          <Label>副手</Label>
          <Select
            style={{ width: 100 }}
            value={aspd.lefthandId}
            onChange={updateAspdLefthandId}
            disabled={!find(weapons, ['id', aspd.weaponId]).lefthand}>
            <Option key={100} value={100}>無</Option>
            <Option key={101} value={101}>盾</Option>
            {usableLefthand.map(({ id, baseAspd }) => (
              <Option key={id} value={id}>{find(weapons, { id }).name}</Option>)
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
        value={aspd.equipMod}
        onChange={updateAspdEquipMod} /> %
    </InputField>
    <InputField>
      <Label>技能提升攻速</Label>
      <InputNumber
        min={0}
        max={200}
        value={aspd.skillMod}
        onChange={updateAspdSkillMod}/> %
    </InputField>
    <InputField>
      <Label>裝備提升攻速(點)</Label>
      <InputNumber
        min={0}
        max={20}
        value={aspd.equipFixed}
        onChange={updateAspdEquipFixed}/>
    </InputField>
    <InputField>
      <RadioGroup value={aspd.potionMod} onChange={({ target }) => updateAspdPotionMod(target.value)}>
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
  updateAspdEquipMod,
  updateAspdEquipFixed,
  updateAspdSkillMod,
  updateAspdPotionMod,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AspdSetting);
