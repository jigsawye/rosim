import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const MenuButton = styled(Button)`
  margin-right: 8px;
`;

const SaveLoad = () => (
  <MenuButton type="primary" icon="save">Save / Load</MenuButton>
);

export default SaveLoad;
