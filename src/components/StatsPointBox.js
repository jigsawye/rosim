import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatsPointLabel = styled.span`
  margin-right: 10px;
  line-height: 23px;
  font-weight: bold;
`;

const StatsPoint = styled.span`
  background: ${props => props.point < 0 ? '#F5222D' : '#232323'};
  color: #FFF;
  padding: 4px 8px;
  border-radius: 7px;
`;

const StatsPointBox = ({ point }) => (
  <div>
    <StatsPointLabel>Stats Point</StatsPointLabel>
    <StatsPoint point={point}>{point}</StatsPoint>
  </div>
);

StatsPointBox.propTypes = {
  point: PropTypes.number.isRequired,
};

export default StatsPointBox;
