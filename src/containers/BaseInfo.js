import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Card, Select, Cascader } from 'antd';
import styled from 'styled-components';
import { range } from 'lodash';

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
      <Col span={8}>
        <Label>Base Level</Label>
        <Select style={{ width: 70 }} value={baseLevel} onChange={setBaseLevel}>
          {range(1, baseLevelRange).map(level => <Option key={level}>{level}</Option>)}
        </Select>
      </Col>
      <Col span={8}>
        <Label>Job Level</Label>
        <Select style={{ width: 70 }} value={jobLevel} onChange={setJobLevel}>
          {range(1, jobLevelRange).map(level => <Option key={level}>{level}</Option>)}
        </Select>
      </Col>
      <Col span={8}>
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
