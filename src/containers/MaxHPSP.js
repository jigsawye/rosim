import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputNumber, Popover } from 'antd';

import { Card, Label, InputField } from '../components/Layouts/CardLayout';
import { HpAddMod, HpMultiMod, SpAddMod, SpMultiMod } from '../components/Tips/MaxHPSP';
import { updateHpAddMod, updateHpMultiMod, updateSpAddMod, updateSpMultiMod } from '../actions';

const MaxHPSP = ({ hpsp, updateHpAddMod, updateHpMultiMod, updateSpAddMod, updateSpMultiMod }) => (
  <Card title="Max HP & Max SP">
    <InputField>
      <Popover title="提升 Max Hp 的數值" content={HpAddMod} placement="bottom">
        <Label>Max HP 提升</Label>
      </Popover>
      <InputNumber
        min={0}
        max={200}
        value={hpsp.hpAddMod}
        onChange={updateHpAddMod} />
    </InputField>
    <InputField>
      <Popover title="提升 Max Hp 的百分比" content={HpMultiMod} placement="bottom">
        <Label>Max HP 提升</Label>
      </Popover>
      <InputNumber
        min={0}
        max={10000}
        value={hpsp.hpMultiMod}
        onChange={updateHpMultiMod} /> %
    </InputField>
    <InputField>
      <Popover title="提升 Max Sp 的數值" content={SpAddMod} placement="bottom">
        <Label>Max SP 提升</Label>
      </Popover>
      <InputNumber
        min={0}
        max={200}
        value={hpsp.spAddMod}
        onChange={updateSpAddMod} />
    </InputField>
    <InputField>
      <Popover title="提升 Max Sp 的百分比" content={SpMultiMod} placement="bottom">
        <Label>Max SP 提升</Label>
      </Popover>
      <InputNumber
        min={0}
        max={10000}
        value={hpsp.spMultiMod}
        onChange={updateSpMultiMod} /> %
    </InputField>
  </Card>
);

const mapStateToProps = ({ hpsp }) => ({ hpsp });

const mapDispatchToProps = dispatch => bindActionCreators({
  updateHpAddMod,
  updateHpMultiMod,
  updateSpAddMod,
  updateSpMultiMod,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MaxHPSP);
