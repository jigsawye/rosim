import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Card, Select } from 'antd';
import styled from 'styled-components';
import range from 'lodash/range';
import { jobs } from '../constants/job';
import { setBaseLevel, setJobLevel, setJob } from '../actions';

const { Option } = Select;

const Label = styled.label`
  margin-right: 10px;
`;

const BaseInfo = ({ baseLevel, jobLevel, job, setBaseLevel, setJobLevel, setJob }) => (
  <Card style={{ margin: '16px 0' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Label>Base Level</Label>
        <Select style={{ width: 60 }} value={baseLevel} onChange={setBaseLevel}>
          {range(1, 100).map((level) => <Option key={level}>{level}</Option>)}
        </Select>
      </Col>
      <Col span={8}>
        <Label>Job Level</Label>
        <Select style={{ width: 60 }} value={jobLevel} onChange={setJobLevel}>
          {range(1, 51).map((level) => <Option key={level}>{level}</Option>)}
        </Select>
      </Col>
      <Col span={8}>
        <Label>Job</Label>
        <Select style={{ width: 80 }} value={job} onChange={setJob}>
          {jobs.map((job) => <Option key={job.id} value={job.id}>{job.name}</Option>)}
        </Select>
      </Col>
    </Row>
  </Card>
);

const mapStateToProps = ({ baseLevel, jobLevel, job }) => ({
  baseLevel, jobLevel, job,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setBaseLevel, setJobLevel, setJob,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseInfo);
