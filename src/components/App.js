import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { Route, HashRouter as Router } from 'react-router-dom';

import StoreContext from '../context/StoreContext';
import loadDataFromUrl from '../utils/loadDataFromUrl';
import useStoreReducer from '../hooks/useStoreReducer';

import About from './About';
import AppFooter from './Layouts/AppFooter';
import AppHeader from './Layouts/AppHeader';
import Simulator from './Simulator';

const { Content } = Layout;

const AppContent = styled(Content)`
  min-height: calc(100vh - 182px);

  @media (min-width: 992px) {
    padding: 30px 50px;
  }
`;

function App() {
  const [state, dispatch] = useStoreReducer();

  useEffect(() => {
    loadDataFromUrl(dispatch);
  }, []);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
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
    </StoreContext.Provider>
  );
}

export default App;
