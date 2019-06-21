import React, { useEffect } from 'react';
import styled from 'styled-components';
import zhTW from 'antd/lib/locale-provider/zh_TW';
import { Layout, LocaleProvider } from 'antd';
import { Route, HashRouter as Router } from 'react-router-dom';

import StoreContext from '../context/StoreContext';
import loadDataFromUrl from '../utils/loadDataFromUrl';
import useStoreReducer from '../hooks/useStoreReducer';
import { LOAD_SAVE_DATA } from '../constants/types';

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
    const data = loadDataFromUrl();

    if (data) {
      dispatch({
        type: LOAD_SAVE_DATA,
        payload: data,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      <Router>
        <LocaleProvider locale={zhTW}>
          <Layout>
            <AppHeader />
            <AppContent>
              <Route exact path="/" component={Simulator} />
              <Route exact path="/about" component={About} />
            </AppContent>
            <AppFooter />
          </Layout>
        </LocaleProvider>
      </Router>
    </StoreContext.Provider>
  );
}

export default App;
