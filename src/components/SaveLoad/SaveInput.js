import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button, Col, Input, Row, Tooltip } from 'antd';

const MarginButton = styled(Button)`
  margin-right: 10px;
`;

function SaveInput({
  value,
  updateSaveName,
  saveData,
  generateCurrentUrl,
  copiedText,
  resetCopied,
}) {
  return (
    <Row gutter={16}>
      <Col xs={14} lg={16}>
        <Input placeholder="儲存名稱" value={value} onChange={updateSaveName} />
      </Col>
      <Col xs={10} lg={8}>
        <MarginButton type="primary" onClick={saveData}>
          儲存
        </MarginButton>
        <Tooltip title={copiedText} onVisibleChange={resetCopied}>
          <Button onClick={generateCurrentUrl}>產生網址</Button>
        </Tooltip>
      </Col>
    </Row>
  );
}

SaveInput.propTypes = {
  copiedText: PropTypes.string.isRequired,
  generateCurrentUrl: PropTypes.func.isRequired,
  resetCopied: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
  updateSaveName: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SaveInput;
