import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Menu } from 'antd';

import SaveLoad from './SaveLoad';

const RoSimMenu = styled(Menu)`
  border: 0;
  float: right;
  @media only screen and (max-width: 767.99px) {
    float: none;
    width: 100%;
    font-size: 14px;
  }
`;

const RoSimMenuItem = styled(Menu.Item)`
  height: 64px;
  line-height: 60px;
  min-width: 72px;
  border-top: 2px solid transparent;
  text-align: center;

  @media only screen and (max-width: 767.99px) {
    width: 100%;
    font-size: 14px;
    line-height: 40px;
    height: 40px;
    padding: 0 !important;
    border: 0;
  }
`;

class NavMenu extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    mode: PropTypes.string,
  }

  static defaultProps = {
    mode: 'vertical'
  }

  constructor(props) {
    super(props);
    this.state = {
      path: this.props.location.pathname,
    };
  }

  handleClick = ({ key }) => {
    if (key !== this.state.path) {
      this.props.history.push(key);
      this.setState({ path: key });
    }
  }

  render() {
    return (
      <div>
        <SaveLoad />
        <RoSimMenu mode={this.props.mode} selectedKeys={[this.state.path]} onClick={this.handleClick}>
          <RoSimMenuItem key="/">模擬器</RoSimMenuItem>
          <RoSimMenuItem key="/about">關於</RoSimMenuItem>
        </RoSimMenu>
      </div>
    );
  }
}

export default withRouter(NavMenu);
