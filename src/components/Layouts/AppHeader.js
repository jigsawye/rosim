import React from 'react';
import styled from 'styled-components';
import { Col, Icon, Layout, Popover, Row } from 'antd';

import AppLogo from '../../assets/logo.png';
import NavMenu from '../../containers/NavMenu';

import './AppHeader.css';

const { Header } = Layout;

const RoSimHeader = styled(Header)`
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
`;

const MenuBar = styled.div`
  display: none;
  align-items: center;
  height: 64px;
  cursor: pointer;

  @media only screen and (max-width: 767.99px) {
    display: flex;
  }
`;

const AppHeader = () => (
  <RoSimHeader>
    <Row gutter={16}>
      <Col xs={20} md={6} lg={5} xxl={4}>
        <a href="/">
          <img src={AppLogo} alt="RoSim Logo" />
        </a>
      </Col>
      <Col xs={0} md={18} lg={19} xxl={20}>
        <NavMenu mode="horizontal" />
      </Col>
      <Col xs={4} md={0}>
        <MenuBar>
          <Popover
            overlayClassName="popover-menu"
            arrowPointAtCenter="center"
            placement="bottomRight"
            content={<NavMenu />}
            trigger="click"
          >
            <Icon type="bars" style={{ fontSize: 24 }} />
          </Popover>
        </MenuBar>
      </Col>
    </Row>
  </RoSimHeader>
);

export default AppHeader;
