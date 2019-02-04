import React from 'react';
import { Checkbox, Col, InputNumber, Popover, Radio, Row, Select } from 'antd';
import { find } from 'lodash';

import allWeapons from '../constants/weapons';
import aspdTable from '../constants/aspdTable';
import useStoreContext from '../hooks/useStoreContext';
import { Card, InputField, Label } from '../components/Layouts/CardLayout';
import {
  ENRICH_CELERMINE_JUICE,
  SPARKLING_CANDY,
} from '../constants/aspdAdditional';
import { EquipFixed, EquipMod, SkillMod } from '../components/Tips/ASPD';
import * as aspdActions from '../actions/aspd';

const RadioGroup = Radio.Group;
const { Option } = Select;

const aspdPotionModOptions = [
  { label: '無', value: 0 },
  { label: '集中藥水', value: 10 },
  { label: '覺醒藥水', value: 15 },
  { label: '菠色克藥水', value: 20 },
];

const additiionalModOptions = [
  { label: '攻速增加濃縮汁', value: ENRICH_CELERMINE_JUICE },
  { label: '跳跳糖', value: SPARKLING_CANDY },
];

const useAspdSettingStore = () => {
  const [{ job, aspd }] = useStoreContext();

  const { weapons, lefthand = [] } = find(aspdTable, ['job', job[1]]);

  return {
    aspd,
    usableWeapons: weapons,
    usableLefthand: lefthand,
    updateAspdWeaponId: aspdActions.useUpdateAspdWeaponId(),
    updateAspdLefthandId: aspdActions.useUpdateAspdLefthandId(),
    updateAspdEquipMod: aspdActions.useUpdateAspdEquipMod(),
    updateAspdEquipFixed: aspdActions.useUpdateAspdEquipFixed(),
    updateAspdSkillMod: aspdActions.useUpdateAspdSkillMod(),
    updateAspdPotionMod: aspdActions.useUpdateAspdPotionMod(),
    updateAspdAdditialalMod: aspdActions.useUpdateAspdAdditialalMod(),
  };
};

function AspdSetting() {
  const {
    aspd,
    usableWeapons,
    usableLefthand,
    updateAspdWeaponId,
    updateAspdLefthandId,
    updateAspdEquipMod,
    updateAspdEquipFixed,
    updateAspdSkillMod,
    updateAspdPotionMod,
    updateAspdAdditialalMod,
  } = useAspdSettingStore();

  return (
    <Card title="ASPD Setting">
      <InputField>
        <Row>
          <Col xs={12}>
            <Label>主要</Label>
            <Select
              style={{ width: 100 }}
              value={aspd.weaponId}
              onChange={updateAspdWeaponId}
            >
              {usableWeapons.map(({ id }) => (
                <Option key={id} value={id}>
                  {find(allWeapons, { id }).name}
                </Option>
              ))}
            </Select>
          </Col>
          <Col xs={12}>
            <Label>副手</Label>
            <Select
              style={{ width: 100 }}
              value={aspd.lefthandId}
              onChange={updateAspdLefthandId}
              disabled={!find(allWeapons, ['id', aspd.weaponId]).lefthand}
            >
              <Option key={100} value={100}>
                無
              </Option>
              <Option key={101} value={101}>
                盾
              </Option>
              {usableLefthand.map(({ id }) => (
                <Option key={id} value={id}>
                  {find(allWeapons, { id }).name}
                </Option>
              ))}
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
          onChange={updateAspdEquipMod}
        />{' '}
        %
      </InputField>
      <InputField>
        <Popover title="技能提升攻速 (攻擊後延遲)" content={SkillMod}>
          <Label>技能提升攻速</Label>
        </Popover>
        <InputNumber
          min={0}
          max={200}
          value={aspd.skillMod}
          onChange={updateAspdSkillMod}
        />{' '}
        %
      </InputField>
      <InputField>
        <Popover title="裝備提升 ASPD" content={EquipFixed}>
          <Label>裝備提升 ASPD</Label>
        </Popover>
        <InputNumber
          min={0}
          max={20}
          value={aspd.equipFixed}
          onChange={updateAspdEquipFixed}
        />
      </InputField>
      <InputField>
        <RadioGroup
          options={aspdPotionModOptions}
          value={aspd.potionMod}
          onChange={({ target }) => updateAspdPotionMod(target.value)}
        />
      </InputField>
      <InputField>
        <Checkbox.Group
          options={additiionalModOptions}
          onChange={updateAspdAdditialalMod}
        />
      </InputField>
    </Card>
  );
}

export default AspdSetting;
