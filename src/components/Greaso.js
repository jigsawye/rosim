import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import greaso from '../assets/greaso.jpg';

const Image = styled.img`
  width: 100%;
`;

const Greaso = () => (
  <Card title="工商：本公會會長的實況連結，歡迎追隨訂閱" style={{ marginTop: 15 }}>
    <a href="https://www.twitch.tv/greaso522" target="__blank">
      <Image src={greaso} alt="greaso twitch"/>
    </a>
  </Card>
);

export default Greaso;
