import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Button } from 'antd';

const SaveInput = ({ value, updateSaveName, saveData }) => (
  <Row gutter={16}>
    <Col xs={18} lg={20}>
      <Input
        placeholder="Save Name"
        value={value}
        onChange={updateSaveName}/>
    </Col>
    <Col xs={6} lg={4}>
      <Button type="primary" onClick={saveData}>Save</Button>
    </Col>
  </Row>
);

SaveInput.propTypes = {
  value: PropTypes.string.isRequired,
  updateSaveName: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
};

export default SaveInput;
