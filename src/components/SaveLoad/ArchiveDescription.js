import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { getJobName } from '../../constants/classes';

const BoldSpan = styled.span`
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  margin-right: 8px;
`;

function ArchiveDescription({ item }) {
  return (
    <div>
      <div>
        Level: <BoldSpan>{item.baseLevel}</BoldSpan>
        Job Level: <BoldSpan>{item.jobLevel}</BoldSpan>
        Job: <BoldSpan>{getJobName(item.job)}</BoldSpan>
      </div>
      <div>
        {Object.keys(item.stats).map(key => (
          <span key={key}>
            <span>{key.toUpperCase()} </span>
            <BoldSpan>{item.stats[key]}</BoldSpan>
          </span>
        ))}
      </div>
    </div>
  );
}

ArchiveDescription.propTypes = {
  item: PropTypes.shape({
    baseLevel: PropTypes.number.isRequired,
    jobLevel: PropTypes.number.isRequired,
    job: PropTypes.array.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};

export default ArchiveDescription;
