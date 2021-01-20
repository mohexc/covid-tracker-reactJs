import React from 'react';
import { Avatar, Layout, Menu, Row } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import imageProfile from '../asset/profile.jpg'

const AppSider = ({ collapsed }) => {

  return (
    <Layout.Sider collapsedWidth={80} collapsed={collapsed}>
      <Row justify="center" align="middle" style={{ margin: "1rem" }}>

        {collapsed
          ? <div style={{ border: "2px white solid", borderRadius: "50%" }}><Avatar src={imageProfile} /></div>
          : <div style={{ border: "2px white solid", borderRadius: "25%" }}><img src={imageProfile} alt="profile" style={{ height: "100px", borderRadius: "20%" }} /></div>
        }

      </Row>
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