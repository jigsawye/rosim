import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import {
  compose,
  pure,
  setPropTypes,
  withHandlers,
  withProps,
} from 'recompose';
import { withRouter } from 'react-router';

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

const withPathHandler = compose(
  pure,
  withRouter,
  withProps(({ location, history, mode = 'vertical' }) => ({
    path: location.pathname,
    push: history.push,
    mode,
  })),
  setPropTypes({
    path: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
  }),
  withHandlers({
    pushPath: ({ path, push }) => ({ key }) => {
      if (key !== path) {
        push(key);
      }
    },
  })
);

const NavMenu = withPathHandler(({ mode, path, pushPath }) => (
  <div>
    <SaveLoad />
    <RoSimMenu mode={mode} selectedKeys={[path]} onClick={pushPath}>
      <RoSimMenuItem key="/">模擬器</RoSimMenuItem>
      <RoSimMenuItem key="/about">關於</RoSimMenuItem>
    </RoSimMenu>
  </div>
));

export default NavMenu;
