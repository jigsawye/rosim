import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Route, HashRouter as Router } from 'react-router-dom';

import About from './About';
import AppFooter from './Layouts/AppFooter';
import AppHeader from './Layouts/AppHeader';
import Simulator from './Simulator';

const { Content } = Layout;

const AppContent = styled(Content)`
  @media (min-width: 992px) {
    padding: 30px 50px;
  }
  min-height: calc(100vh - 182px);
`;

const App = () => (
  <Router>
    <Layout>
      <AppHeader />
      <AppContent>
        <Route exact path="/" component={Simulator} />
        <Route exact path="/about" component={About} />
      </AppContent>
      <AppFooter />
    </Layout>
  </Router>
);

export default App;
