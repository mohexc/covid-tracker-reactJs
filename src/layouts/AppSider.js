import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const AppSider = ({ collapsed }) => {

  return (
    <Layout.Sider collapsedWidth={80} collapsed={collapsed}>
      <div style={{ backgroundColor: "whitesmoke", margin: "1rem" }}>
        {collapsed
          ? <h1 style={{ textAlign: "center" }}>C-19 </h1>
          : <h1 style={{ fontWeight: 'bold', margin: "2rem" }}>
            <p>Covid-19</p>
            <p>Tracker's</p>
          </h1>
        }
      </div>
      <Menu theme="dark" mode="inline" >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/">Who am i</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/covid19-tracker">covid-19 tracker</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/question2_2">Question2_2</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default AppSider;