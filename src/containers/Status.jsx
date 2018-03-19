import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Divider } from 'antd';

import { Card } from '../components/Layouts/CardLayout';
import Stat from '../components/Stat';
import StatusPointBox from '../components/StatusPointBox';
import * as statsActions from '../actions/stats';
import { getRemainingStatsPoint, getJobBonusStats, getSkillBuffStats } from '../utils/stats';
import { getStatsRange } from '../constants/ranges';

const Status = ({
  stats,
  statsRange,
  setStat,
  otherStats,
  setOtherStat,
  remainingPoint,
  jobBonusStats,
  skillBuffStats,
}) => (
  <Card title="Stats" style={{ marginTop: 15 }}>
    {Object.keys(stats).map(key => (
      <Stat
        key={key}
        label={key}
        value={stats[key]}
        statsRange={statsRange}
        bonuse={jobBonusStats[key]}
        buff={skillBuffStats[key]}
        onChange={stat => setStat({ key, stat })}
        otherStat={otherStats[key]}
        onChangeOtherStat={stat => setOtherStat({ key, stat })}
      />
    ))}
    <Divider />
    <StatusPointBox point={remainingPoint} />
  </Card>
);

const statusShape = {
  str: PropTypes.number.isRequired,
  agi: PropTypes.number.isRequired,
  vit: PropTypes.number.isRequired,
  int: PropTypes.number.isRequired,
  dex: PropTypes.number.isRequired,
  luk: PropTypes.number.isRequired,
};

Status.propTypes = {
  stats: PropTypes.shape(statusShape).isRequired,
  otherStats: PropTypes.shape(statusShape).isRequired,
  jobBonusStats: PropTypes.shape(statusShape).isRequired,
  skillBuffStats: PropTypes.shape(statusShape).isRequired,
  statsRange: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  setStat: PropTypes.func.isRequired,
  setOtherStat: PropTypes.func.isRequired,
  remainingPoint: PropTypes.number.isRequired,
};

const mapStateToProps = ({
  stats, otherStats, baseLevel, jobLevel, job, skills,
}) => ({
  stats,
  otherStats,
  statsRange: getStatsRange(job),
  jobBonusStats: getJobBonusStats(jobLevel, job),
  skillBuffStats: getSkillBuffStats(skills),
  remainingPoint: getRemainingStatsPoint(baseLevel, stats, job),
});

const mapDispatchToProps = dispatch => bindActionCreators(statsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Status);
