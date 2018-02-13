import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Divider } from 'antd';

import { getRemainingStatsPoint, getJobBonusStats } from '../utils/stats';
import Stats from '../components/Stats';
import StatsPointBox from '../components/StatsPointBox';
import { setStat } from '../actions';

const Status = ({ stats, setStat, remainingPoint, jobBonusStats }) => (
  <Card style={{ margin: '16px 0' }} title="Stats">
    {Object.keys(stats).map((key) => (
      <Stats
        key={key}
        label={key.toUpperCase()}
        value={stats[key]}
        bonuse={jobBonusStats[key]}
        onChange={(stat) => setStat(key, stat)}>
      </Stats>
    ))}
    <Divider></Divider>
    <StatsPointBox point={remainingPoint}></StatsPointBox>
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
