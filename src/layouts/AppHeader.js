import React from 'react';
import { Layout, Row, Col } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

// main
const AppHeader = ({ setcollapsed, collapsed }) => {

  return (
    <Layout.Header style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)", backgroundColor: "white", paddingLeft: "1rem" }}>
      <Row>
        <Col xs={12} >
          {collapsed && <MenuFoldOutlined style={{ fontSize: "1.5rem" }} onClick={() => setcollapsed(!collapsed)} />}
          {!collapsed && <MenuUnfoldOutlined style={{ fontSize: "1.5rem" }} onClick={() => setcollapsed(!collapsed)} />}
        </Col>
        <Col xs={12}>

        </Col>
      </Row>
    </Layout.Header>
  );
}

export default AppHeader;