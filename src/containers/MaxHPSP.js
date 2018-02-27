import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputNumber } from 'antd';

import { Card, Label, InputField } from '../components/Layouts/CardLayout';
import { updateHpAddMod, updateHpMultiMod, updateSpAddMod, updateSpMultiMod } from '../actions';

const MaxHPSP = ({ hpsp, updateHpAddMod, updateHpMultiMod, updateSpAddMod, updateSpMultiMod }) => (
  <Card title="Max HP & Max SP">
    <InputField>
      <Label>Max HP 提升</Label>
      <InputNumber
        min={0}
        max={200}
        value={hpsp.hpAddMod}
        onChange={updateHpAddMod} />
    </InputField>
    <InputField>
      <Label>Max HP 提升</Label>
      <InputNumber
        min={0}
        max={10000}
        value={hpsp.hpMultiMod}
        onChange={updateHpMultiMod} /> %
    </InputField>
    <InputField>
      <Label>Max SP 提升</Label>
      <InputNumber
        min={0}
        max={200}
        value={hpsp.spAddMod}
        onChange={updateSpAddMod} />
    </InputField>
    <InputField>
      <Label>Max SP 提升</Label>
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
