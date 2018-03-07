import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Select, InputNumber, Radio, Popover } from 'antd';
import { find } from 'lodash';

import { Card, Label, InputField } from '../components/Layouts/CardLayout';
import { EquipMod, EquipFixed, SkillMod } from '../components/Tips/ASPD';
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

const RadioGroup = Radio.Group;
const { Option } = Select;

const aspdPotionModOptions = [
  { label: '無', value: 0 },
  { label: '集中藥水', value: 10 },
  { label: '覺醒藥水', value: 15 },
  { label: '菠色克藥水', value: 20 },
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
      <Popover title="裝備提升攻速 (攻擊後延遲)" content={EquipMod}>
        <Label>裝備提升攻速</Label>
      </Popover>
      <InputNumber
        min={-100}
        max={200}
        value={aspd.equipMod}
        onChange={updateAspdEquipMod} /> %
    </InputField>
    <InputField>
      <Popover title="技能提升攻速 (攻擊後延遲)" content={SkillMod}>
        <Label>技能提升攻速</Label>
      </Popover>
      <InputNumber
        min={0}
        max={200}
        value={aspd.skillMod}
        onChange={updateAspdSkillMod}/> %
    </InputField>
    <InputField>
      <Popover title="裝備提升 ASPD" content={EquipFixed}>
        <Label>裝備提升 ASPD</Label>
      </Popover>
      <InputNumber
        min={0}
        max={20}
        value={aspd.equipFixed}
        onChange={updateAspdEquipFixed}/>
    </InputField>
    <InputField>
      <RadioGroup
        options={aspdPotionModOptions}
        value={aspd.potionMod}
        onChange={({ target }) => updateAspdPotionMod(target.value)}/>
    </InputField>
  </Card>
);

const mapStateToProps = ({ job, stats, aspd }) => {
  const { weapons, lefthand } = find(aspdTable, ['job', job[1]]);
  return {
    stats,
    aspd,
    usableWeapons: weapons,
    usableLefthand: lefthand,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  updateAspdWeaponId,
  updateAspdLefthandId,
  updateAspdEquipMod,
  updateAspdEquipFixed,
  updateAspdSkillMod,
  updateAspdPotionMod,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AspdSetting);
