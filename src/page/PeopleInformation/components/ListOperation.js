import React from 'react';
import { Dropdown, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
const ListOperation = ({ record, show }) => {

  const handleMenuClick = (values) => {
    console.log(values)
    debugger
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item style={{ minWidth: "80px" }}> <span >Edit</span></Menu.Item>
      <Menu.Item style={{ minWidth: "80px" }} > <span style={{ width: "150px" }}>View</span></Menu.Item>
    </Menu>
  );
  return (
    <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<CaretDownOutlined />}>
      <span style={{ minWidth: "80px" }}>View</span>
    </Dropdown.Button>
  );
}

export default ListOperation;