import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Divider } from 'antd';

import Stat from '../components/Stat';
import StatusPointBox from '../components/StatusPointBox';
import { setStat, setOtherStat } from '../actions';
import { getRemainingStatsPoint, getJobBonusStats } from '../utils/stats';

const Status = ({ stats, setStat, otherStats, setOtherStat, remainingPoint, jobBonusStats }) => (
  <Card title="Stats">
    {Object.keys(stats).map((key) => (
      <Stat
        key={key}
        label={key.toUpperCase()}
        value={stats[key]}
        bonuse={jobBonusStats[key]}
        onChange={stat => setStat(key, stat)}
        otherStat={otherStats[key]}
        onChangeOtherStat={stat => setOtherStat(key, stat)}>
      </Stat>
    ))}
    <Divider></Divider>
    <StatusPointBox point={remainingPoint}></StatusPointBox>
  </Card>
);

const mapStateToProps = ({ stats, otherStats, baseLevel, jobLevel, job }) => ({
  stats,
  otherStats,
  jobBonusStats : getJobBonusStats(jobLevel, job),
  remainingPoint: getRemainingStatsPoint(baseLevel, stats),
});

const mapDispatchToProps = dispatch => bindActionCreators({ setStat, setOtherStat }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Status);
