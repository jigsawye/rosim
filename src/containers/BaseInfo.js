import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Card, Select, Cascader, Popover } from 'antd';
import styled from 'styled-components';
import { range } from 'lodash';

import { BaseLevelTips, JobLevelTips } from '../components/Tips/BaseInfo';
import classes from '../constants/classes';
import { getBaseLevelRange, getJobLevelRange } from '../constants/ranges';
import { setBaseLevel, setJobLevel, setJob } from '../actions';

const { Option } = Select;

const Label = styled.label`
  margin-right: 10px;
`;

const BaseInfo = ({
  baseLevelRange,
  jobLevelRange,
  baseLevel,
  jobLevel,
  job,
  setBaseLevel,
  setJobLevel,
  setJob,
}) => (
  <Card title="Base Info" style={{ marginTop: 15 }}>
    <Row gutter={16}>
      <Col span={7}>
        <Popover title="Base Level (基本等級)" content={BaseLevelTips} placement="bottomLeft">
          <Label>Lv.</Label>
        </Popover>
        <Select style={{ width: 70 }} value={baseLevel} onChange={setBaseLevel}>
          {range(1, baseLevelRange).map(level => <Option key={level}>{level}</Option>)}
        </Select>
      </Col>
      <Col span={7}>
        <Popover title="Job Level (職業等級)" content={JobLevelTips} placement="bottom">
          <Label>Job Lv.</Label>
        </Popover>
        <Select style={{ width: 70 }} value={jobLevel} onChange={setJobLevel}>
          {range(1, jobLevelRange).map(level => <Option key={level}>{level}</Option>)}
        </Select>
      </Col>
      <Col span={10}>
        <Label>Job</Label>
        <Cascader options={classes} value={job} onChange={setJob} allowClear={false} />
      </Col>
    </Row>
  </Card>
);

const mapStateToProps = ({ baseLevel, jobLevel, job }) => ({
  baseLevel,
  jobLevel,
  job,
  baseLevelRange: getBaseLevelRange(job),
  jobLevelRange: getJobLevelRange(job),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setBaseLevel, setJobLevel, setJob,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseInfo);
