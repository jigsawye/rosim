import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StatusPointLabel = styled.span`
  margin-right: 10px;
  line-height: 23px;
  font-weight: bold;
`;

const StatusPoint = styled.span`
  background: ${props => (props.point < 0 ? '#F5222D' : '#232323')};
  color: #fff;
  padding: 4px 8px;
  border-radius: 7px;
`;

function StatusPointBox({ point }) {
  return (
    <div>
      <StatusPointLabel>剩餘點數</StatusPointLabel>
      <StatusPoint point={point}>{point}</StatusPoint>
    </div>
  );
}

StatusPointBox.propTypes = {
  point: PropTypes.number.isRequired,
};

export default StatusPointBox;
