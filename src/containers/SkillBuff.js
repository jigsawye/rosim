import React from 'react';
import { Col, Row, Select, Switch } from 'antd';
import { find } from 'lodash';

import useStoreContext from '../hooks/useStoreContext';
import useUpdateBuffSkill from '../actions/skill';
import { Card, InputField, Label } from '../components/Layouts/CardLayout';
import { acolyteSkills } from '../constants/skills';

const { Option } = Select;

const useSkillBuffStore = () => {
  const [{ skills }] = useStoreContext();
  return {
    getBuffVelue: key => {
      const skill = find(skills, { key });
      return skill ? skill.value : false;
    },
    updateBuffSkill: useUpdateBuffSkill(),
  };
};

function SkillBuff() {
  const { getBuffVelue, updateBuffSkill } = useSkillBuffStore();

  return (
    <Card title="Skill Buffs">
      <Row>
        {acolyteSkills.map(({ key, name, maxLevel, isToggle = false }) => {
          const buffValue = getBuffVelue(key);
          return (
            <Col key={key} xs={12}>
              <InputField>
                <Label>{name}</Label>
                {isToggle ? (
                  <Switch
                    checked={buffValue}
                    onChange={checked =>
                      updateBuffSkill({ key, value: checked })
                    }
                  />
                ) : (
                  <Select
                    style={{ width: 70 }}
                    value={buffValue || 0}
                    onChange={level => updateBuffSkill({ key, value: level })}
                  >
                    <Option key={0} value={0}>
                      off
                    </Option>
                    {maxLevel.map(level => (
                      <Option key={level} value={level}>
                        {level}
                      </Option>
                    ))}
                  </Select>
                )}
              </InputField>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
}

export default SkillBuff;
