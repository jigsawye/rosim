import PropTypes from 'prop-types';
import React from 'react';
import { InputNumber, Popover } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Card, InputField, Label } from '../components/Layouts/CardLayout';
import {
  HpAddMod,
  HpMultiMod,
  SpAddMod,
  SpMultiMod,
} from '../components/Tips/MaxHPSP';
import * as hpspActions from '../actions/hpsp';

const MaxHPSP = ({
  hpsp,
  updateHpAddMod,
  updateHpMultiMod,
  updateSpAddMod,
  updateSpMultiMod,
}) => (
  <Card title="Max HP & Max SP">
    <InputField>
      <Popover title="提升 Max Hp 的數值" content={HpAddMod} placement="bottom">
        <Label>Max HP 提升</Label>
      </Popover>
      <InputNumber
        min={-10000}
        max={20000}
        value={hpsp.hpAddMod}
        onChange={updateHpAddMod}
      />
    </InputField>
    <InputField>
      <Popover
        title="提升 Max Hp 的百分比"
        content={HpMultiMod}
        placement="bottom"
      >
        <Label>Max HP 提升</Label>
      </Popover>
      <InputNumber
        min={-100}
        max={400}
        value={hpsp.hpMultiMod}
        onChange={updateHpMultiMod}
      />{' '}
      %
    </InputField>
    <InputField>
      <Popover title="提升 Max Sp 的數值" content={SpAddMod} placement="bottom">
        <Label>Max SP 提升</Label>
      </Popover>
      <InputNumber
        min={-5000}
        max={10000}
        value={hpsp.spAddMod}
        onChange={updateSpAddMod}
      />
    </InputField>
    <InputField>
      <Popover
        title="提升 Max Sp 的百分比"
        content={SpMultiMod}
        placement="bottom"
      >
        <Label>Max SP 提升</Label>
      </Popover>
      <InputNumber
        min={-100}
        max={400}
        value={hpsp.spMultiMod}
        onChange={updateSpMultiMod}
      />{' '}
      %
    </InputField>
  </Card>
);

MaxHPSP.propTypes = {
  hpsp: PropTypes.shape({
    hpAddMod: PropTypes.number.isRequired,
    hpMultiMod: PropTypes.number.isRequired,
    spAddMod: PropTypes.number.isRequired,
    spMultiMod: PropTypes.number.isRequired,
  }).isRequired,
  updateHpAddMod: PropTypes.func.isRequired,
  updateHpMultiMod: PropTypes.func.isRequired,
  updateSpAddMod: PropTypes.func.isRequired,
  updateSpMultiMod: PropTypes.func.isRequired,
};

const mapStateToProps = ({ hpsp }) => ({ hpsp });

const mapDispatchToProps = dispatch =>
  bindActionCreators(hpspActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaxHPSP);
