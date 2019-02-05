import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { withRouter } from 'react-router';

import SaveLoad from './SaveLoad';

const RoSimMenu = styled(Menu)`
  border: 0;

  @media only screen and (max-width: 767.99px) {
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

const NavMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 767.99px) {
    flex-direction: column;
  }
`;

function NavMenu({ location, history, mode }) {
  return (
    <NavMenuWrapper>
      <RoSimMenu
        mode={mode}
        selectedKeys={[location.pathname]}
        onClick={({ key }) => {
          if (key !== location.pathname) {
            history.push(key);
          }
        }}
      >
        <RoSimMenuItem key="/">模擬器</RoSimMenuItem>
        <RoSimMenuItem key="/about">關於</RoSimMenuItem>
      </RoSimMenu>
      <SaveLoad />
    </NavMenuWrapper>
  );
}

NavMenu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  mode: PropTypes.oneOf(['horizontal', 'vertical']),
};

NavMenu.defaultProps = {
  mode: 'vertical',
};

export default withRouter(NavMenu);
