import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Popover, Select } from 'antd';
import { range, upperCase } from 'lodash';

import { getStatNeedPoint } from '../utils/stats';

import * as StatTips from './Tips/Stat';

const { Option } = Select;

const StatsContainer = styled.div`
  margin: 5px 0;
`;

const Label = styled.div`
  display: inline-block;
  width: 30px;
  font-weight: bold;
  line-height: 32px;
  margin-right: 10px;
`;

const Plus = styled.span`
  margin: 0 7px;
`;

const Bonuse = styled.div`
  display: inline-block;
  width: 10px;
`;

const NeedPoint = styled.span`
  background-color: #000;
  color: #fff;
  margin: 0 7px;
  padding: 4px 8px;
  border-radius: 7px;
`;

function Stats({
  label,
  value,
  onChange,
  bonuse,
  buff,
  otherStat,
  onChangeOtherStat,
  statsRange,
}) {
  return (
    <StatsContainer>
      <Popover
        title={StatTips[label].title}
        content={StatTips[label].content}
        placement="right"
      >
        <Label>{upperCase(label)}</Label>
      </Popover>
      <Select style={{ width: 75 }} value={value} onChange={onChange}>
        {statsRange.map(stat => (
          <Option key={stat}>{stat}</Option>
        ))}
      </Select>
      <Plus>+</Plus>
      <Bonuse>{bonuse + buff}</Bonuse>
      <Plus>+</Plus>
      <Select
        style={{ width: 75 }}
        value={otherStat}
        onChange={onChangeOtherStat}
      >
        {range(0, 201).map(stat => (
          <Option key={stat}>{stat}</Option>
        ))}
      </Select>
      <NeedPoint>{getStatNeedPoint(value)}</NeedPoint>
    </StatsContainer>
  );
}

Stats.propTypes = {
  bonuse: PropTypes.number.isRequired,
  buff: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  otherStat: PropTypes.number.isRequired,
  statsRange: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeOtherStat: PropTypes.func.isRequired,
};

export default Stats;
