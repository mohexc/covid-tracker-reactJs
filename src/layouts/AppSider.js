import React from 'react';
import { Avatar, Layout, Menu, Row } from 'antd';
import { VideoCameraOutlined, InstagramOutlined, AppstoreOutlined, IdcardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import imageProfile from '../asset/profile.jpg'

const AppSider = ({ collapsed }) => {

  return (
    <Layout.Sider collapsedWidth={80} collapsed={collapsed}>

      {collapsed
        ? <Row justify="center" align="middle" style={{ height: '100px' }}>
          <Avatar src={imageProfile} style={{ border: "2px white solid", borderRadius: "50%" }} />
        </Row>
        : <div style={{ backgroundColor: "black", height: "200px", position: "relative" }}>
          <h4 style={{
            color: 'white',
            fontWeight: "bolder",
            position: "absolute",
            bottom: "40px",
            left: '35px',
            fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif'
          }}>Nut Prohmpiriya</h4>
          <h5 style={{
            color: 'white',
            fontWeight: "bolder",
            position: "absolute",
            bottom: "70px",
            left: '10px',
            fontFamily: 'Muli,Roboto,"Helvetica",Arial,sans-serif'
          }}>nut.prohmpiriya@gmail.com</h5>
          <img src={imageProfile} alt="profile" style={{
            height: "100px",
            borderRadius: "60%",
            border: "10px black solid",
            position: "absolute",
            bottom: "-50px",
            left: '50px'
          }}
          />
        </div>
      }

      <Menu theme="dark" mode="inline" style={{ marginTop: "50px" }}>
        <Menu.Item key="1" icon={<AppstoreOutlined />}>
          <Link to="/">app store</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/covid19-tracker">covid-19 tracker</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<InstagramOutlined />} >
          <Link to="/instragram">instragram</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<IdcardOutlined />} >
          <Link to="/aboutme">about me</Link>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default AppSider;