import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Divider } from 'antd';

import Stat from '../components/Stat';
import StatusPointBox from '../components/StatusPointBox';
import { setStat } from '../actions';
import { getRemainingStatsPoint, getJobBonusStats } from '../utils/stats';

const Status = ({ stats, setStat, remainingPoint, jobBonusStats }) => (
  <Card title="Stats">
    {Object.keys(stats).map((key) => (
      <Stat
        key={key}
        label={key.toUpperCase()}
        value={stats[key]}
        bonuse={jobBonusStats[key]}
        onChange={(stat) => setStat(key, stat)}>
      </Stat>
    ))}
    <Divider></Divider>
    <StatusPointBox point={remainingPoint}></StatusPointBox>
  </Card>
);

const mapStateToProps = ({ stats, baseLevel, jobLevel, job }) => ({
  stats,
  jobBonusStats : getJobBonusStats(jobLevel, job),
  remainingPoint: getRemainingStatsPoint(baseLevel, stats),
});

const mapDispatchToProps = dispatch => bindActionCreators({ setStat }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Status);
