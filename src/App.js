import React, { useState } from 'react';
import './App.less';
import AppSider from './layouts/AppSider';
import AppFooter from './layouts/AppFooter';
import AppHeader from './layouts/AppHeader'
import { Layout } from 'antd'
import { BrowserRouter, Switch, Route, } from "react-router-dom";
// import WhoAmIPage from './page/WhoAmI/WhoAmIPage';
import Covid19TrackerPage from './page/Covid-Tracker/Covid19TrackerPage';
import InstragramPage from './page/InstragramClone/InstragramPage';
import AuthContext from './context/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query'
import PeopleInformationList from './page/PeopleInformation/PeopleInformationList';

const queryClient = new QueryClient()

// main
const App = () => {
  const [collapsed, setcollapsed] = useState(true)
  return (
    <AuthContext>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <AppSider collapsed={collapsed} />
            <Layout style={{ minHeight: '100vh' }}>
              <AppHeader setcollapsed={setcollapsed} collapsed={collapsed} />
              <Layout.Content >

                <div style={{ minHeight: '80%', padding: '1rem' }}>
                  <Switch>
                    <Route exact path="/"><Covid19TrackerPage /></Route>
                    <Route exact path="/instragram"><InstragramPage /></Route>
                    <Route exact path="/peopleinformation"><PeopleInformationList /></Route>
                  </Switch>
                </div>

              </Layout.Content>
              <AppFooter />
            </Layout>
          </Layout>
        </QueryClientProvider>
      </BrowserRouter >
    </AuthContext>
  );
}

export default App;