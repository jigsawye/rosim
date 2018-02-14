import React from 'react';
import { Icon, Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => (
  <Footer style={{ textAlign: 'center' }}>
    <p>
      Developed with <Icon type="heart" /> by <a href="https://github.com/jigsawye" target="__blank">Evan Ye</a>.
    </p>
    <p>
      <a href="https://github.com/jigsawye/ro-stats-simulator" target="__blank">
        <Icon type="github" /> Source Code
      </a>
    </p>
  </Footer>
);

export default AppFooter;
