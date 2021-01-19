import React, { useState } from 'react';
import './App.less';
import AppSider from './layouts/AppSider';
import AppFooter from './layouts/AppFooter';
import AppHeader from './layouts/AppHeader'
import { Layout } from 'antd'
import { BrowserRouter, Switch, Route, } from "react-router-dom";


// main
const App = () => {
  const [collapsed, setcollapsed] = useState(false)
  return (
    <BrowserRouter>
      <Layout>
        <AppSider collapsed={collapsed} />
        <Layout style={{ height: '100vh' }}>
          <AppHeader setcollapsed={setcollapsed} collapsed={collapsed} />
          <Layout.Content style={{ height: '100%' }}>

            <div style={{ backgroundColor: "white", height: "100%" }}></div>

            <AppFooter />
          </Layout.Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;