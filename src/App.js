import React, { useState } from 'react';
import './App.less';
import AppSider from './layouts/AppSider';
import AppFooter from './layouts/AppFooter';
import AppHeader from './layouts/AppHeader'
import { Layout } from 'antd'
import { BrowserRouter, Switch, Route, } from "react-router-dom";
// import WhoAmIPage from './page/WhoAmI/WhoAmIPage';
import Covid19TrackerPage from './page/Covid-Tracker/Covid19TrackerPage';


// main
const App = () => {
  const [collapsed, setcollapsed] = useState(false)
  return (
    <BrowserRouter>
      <Layout>
        <AppSider collapsed={collapsed} />
        <Layout style={{ minHeight: '100vh' }}>
          <AppHeader setcollapsed={setcollapsed} collapsed={collapsed} />
          <Layout.Content >

            <div style={{ minHeight: '80%', padding: '1rem' }}>
              <Switch>
                <Route exact path="/"><Covid19TrackerPage /></Route>
              </Switch>
            </div>

          </Layout.Content>
          <AppFooter />
        </Layout>
      </Layout>
    </BrowserRouter >
  );
}

export default App;