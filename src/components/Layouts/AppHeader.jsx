import React from 'react';
import styled from 'styled-components';
import { Layout, Row, Col, Popover, Icon } from 'antd';

import NavMenu from '../../containers/NavMenu';
import AppLogo from '../../assets/logo.png';

import './AppHeader.css';

const { Header } = Layout;

const HomePageLink = styled.a`
  overflow: hidden;
  padding-left: 40px;
  float: left;
  height: 64px;
  line-height: 64px;
  text-decoration: none;
  white-space: nowrap;

  @media only screen and (max-width: 1200px) {
    padding: 0 40px;
  }
`;

const RoSimHeader = styled(Header)`
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
`;

const MenuBar = styled(Icon)`
  display: none;
  position: absolute;
  right: 30px;
  top: 25px;
  z-index: 1;
  width: 16px;
  height: 22px;
  cursor: pointer;

  @media only screen and (max-width: 767.99px) {
    display: block;
  }
`;

const AppHeader = () => (
  <RoSimHeader>
    <Popover
      overlayClassName="popover-menu"
      placement="bottomRight"
      content={<NavMenu />}
      trigger="click"
    >
      <MenuBar type="bars" />
    </Popover>
    <Row gutter={16}>
      <Col xs={24} md={6} lg={5} xxl={4}>
        <HomePageLink href="/">
          <img src={AppLogo} alt="RoSim Logo" />
        </HomePageLink>
      </Col>
      <Col xs={0} md={18} lg={19} xxl={20}>
        <NavMenu mode="horizontal" />
      </Col>
    </Row>
  </RoSimHeader>
);

export default AppHeader;
