import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

// main
const SignUp = ({ setIsSignUp }) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ backgroundColor: "white", padding: "1rem" }}>
      <Form
        name="register"
        initialValues={{ remember: true, }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!', },]}>
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="Username"
          rules={[{ required: true, message: 'Please input your Email!', },]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!', },]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Please input your Confirm Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder=" Confirm Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign Up
        </Button>
          <span className="mx1"> Or</span>
          <span
            className="pointer"
            style={{ color: '#3DB489' }}
            onClick={() => setIsSignUp(true)}>
            SignIn
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp 
