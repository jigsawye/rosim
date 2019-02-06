import React from 'react';
import { Icon, Layout } from 'antd';

const { Footer } = Layout;

function Creator() {
  return (
    <a
      href="https://github.com/jigsawye"
      rel="noopener noreferrer"
      target="_blank"
    >
      Evan Ye
    </a>
  );
}

function AppFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <p>
        Developed with <Icon type="heart" /> by <Creator />.
      </p>
      <p>
        <a
          href="https://github.com/jigsawye/rosim"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon type="github" /> Source Code
        </a>
      </p>
    </Footer>
  );
}

export default AppFooter;
