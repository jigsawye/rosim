import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Select, Switch } from 'antd';
import { find } from 'lodash';

import { Card, Label, InputField } from '../components/Layouts/CardLayout';
import { updateBuffSkill } from '../actions';
import { acolyteSkills } from '../constants/skills';

const { Option } = Select;

const SkillBuff = ({ getBuffVelue, updateBuffSkill }) => (
  <Card title="Skill Buffs">
    <Row>
      {acolyteSkills.map(({ key, name, maxLevel, isToggle = false }) => {
        const buffValue = getBuffVelue(key);
        return (
          <Col key={key} xs={12}>
            <InputField>
              <Label>{name}</Label>
              {isToggle ?
                <Switch
                  checked={buffValue}
                  onChange={checked => updateBuffSkill({ key, value: checked })}/> :
                <Select
                  style={{ width: 70 }}
                  value={buffValue ? buffValue : 0}
                  onChange={level => updateBuffSkill({ key, value: level })}>
                  <Option key={0} value={0}>off</Option>
                  {maxLevel.map(level => <Option key={level} value={level}>{level}</Option>)}
                </Select>
              }
            </InputField>
          </Col>
        );
      })}
    </Row>
  </Card>
);

const mapStateToProps = ({ skills }) => ({
  getBuffVelue: (key) => {
    const skill = find(skills, { key });
    return skill ? skill.value : false;
  }
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateBuffSkill }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SkillBuff);
