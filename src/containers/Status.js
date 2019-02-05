import React from 'react';
import { Divider } from 'antd';

import Stat from '../components/Stat';
import StatusPointBox from '../components/StatusPointBox';
import useStoreContext from '../hooks/useStoreContext';
import { Card } from '../components/Layouts/CardLayout';
import {
  getJobBonusStats,
  getRemainingStatsPoint,
  getSkillBuffStats,
} from '../utils/stats';
import { getStatsRange } from '../constants/ranges';
import * as statsActions from '../actions/stats';

const useStatusStore = () => {
  const [
    { stats, otherStats, baseLevel, jobLevel, job, skills },
  ] = useStoreContext();

  return {
    stats,
    otherStats,
    statsRange: getStatsRange(job),
    jobBonusStats: getJobBonusStats(jobLevel, job),
    skillBuffStats: getSkillBuffStats(skills),
    remainingPoint: getRemainingStatsPoint(baseLevel, stats, job),
    setStat: statsActions.useSetStat(),
    setOtherStat: statsActions.useSetOtherStat(),
  };
};

function Status() {
  const {
    stats,
    statsRange,
    setStat,
    otherStats,
    setOtherStat,
    remainingPoint,
    jobBonusStats,
    skillBuffStats,
  } = useStatusStore();
  return (
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
}

export default Status;
