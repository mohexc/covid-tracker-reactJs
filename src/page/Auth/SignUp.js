import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useAuthContext } from '../../context/AuthContext';


// main
const SignUp = ({ setIsSignUp }) => {

  const { register } = useAuthContext()

  const onFinish = async (values) => {
    try {
      const result = await register(values.username, values.email, values.password)
      message.success('Success')
      return result
    } catch (error) {
      const err = error.res
        ? error.response.data.message
        : error.message
      message.error(err)
      debugger
    }


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
          rules={[{ required: true, message: 'Please input your Username!', },]}>
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="username"
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
            onClick={() => setIsSignUp(false)}>
            SignIn
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp 
