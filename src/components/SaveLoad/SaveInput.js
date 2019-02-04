import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button, Col, Input, Row, Tooltip } from 'antd';

const MarginButton = styled(Button)`
  margin-right: 10px;
`;

const SaveInput = ({
  value,
  updateSaveName,
  saveData,
  generateCurrentUrl,
  copiedText,
  resetCopied,
}) => (
  <Row gutter={16}>
    <Col xs={14} lg={17}>
      <Input placeholder="Save Name" value={value} onChange={updateSaveName} />
    </Col>
    <Col xs={10} lg={7}>
      <MarginButton type="primary" onClick={saveData}>
        Save
      </MarginButton>
      <Tooltip title={copiedText} onVisibleChange={resetCopied}>
        <Button onClick={generateCurrentUrl}>Url</Button>
      </Tooltip>
    </Col>
  </Row>
);

SaveInput.propTypes = {
  copiedText: PropTypes.string.isRequired,
  generateCurrentUrl: PropTypes.func.isRequired,
  resetCopied: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
  updateSaveName: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SaveInput;
