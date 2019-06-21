import React from 'react';
import styled from 'styled-components';
import { Card, Cascader, Col, Popover, Row, Select } from 'antd';

import classes from '../constants/classes';
import useStoreContext from '../hooks/useStoreContext';
import { BaseLevelTips, JobLevelTips } from '../components/Tips/BaseInfo';
import { getBaseLevelRange, getJobLevelRange } from '../constants/ranges';
import * as baseInfoActions from '../actions/baseInfo';

const { Option } = Select;

const Label = styled.label`
  margin-right: 10px;
`;

const useBaseInfoStore = () => {
  const [{ baseLevel, jobLevel, job }] = useStoreContext();

  return {
    baseLevel,
    jobLevel,
    job,
    baseLevelRange: getBaseLevelRange(job),
    jobLevelRange: getJobLevelRange(job),
    setBaseLevel: baseInfoActions.useSetBaseLevel(),
    setJobLevel: baseInfoActions.useSetJobLevel(),
    setJob: baseInfoActions.useSetJob(),
  };
};

function BaseInfo() {
  const {
    baseLevelRange,
    jobLevelRange,
    baseLevel,
    jobLevel,
    job,
    setBaseLevel,
    setJobLevel,
    setJob,
  } = useBaseInfoStore();

  return (
    <Card style={{ marginTop: 15 }}>
      <Row gutter={16}>
        <Col span={7}>
          <Popover
            title="Base Level (基本等級)"
            content={BaseLevelTips}
            placement="bottomLeft"
          >
            <Label>Lv.</Label>
          </Popover>
          <Select
            style={{ width: 80 }}
            value={baseLevel}
            onChange={setBaseLevel}
          >
            {baseLevelRange.map(level => (
              <Option key={level}>{level}</Option>
            ))}
          </Select>
        </Col>
        <Col span={7}>
          <Popover
            title="Job Level (職業等級)"
            content={JobLevelTips}
            placement="bottom"
          >
            <Label>Job Lv.</Label>
          </Popover>
          <Select style={{ width: 70 }} value={jobLevel} onChange={setJobLevel}>
            {jobLevelRange.map(level => (
              <Option key={level}>{level}</Option>
            ))}
          </Select>
        </Col>
        <Col span={10}>
          <Label>Job</Label>
          <Cascader
            options={classes}
            value={job}
            onChange={setJob}
            allowClear={false}
          />
        </Col>
      </Row>
    </Card>
  );
}

export default BaseInfo;
