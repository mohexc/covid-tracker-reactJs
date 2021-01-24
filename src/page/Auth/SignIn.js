
import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useAuthContext } from '../../context/AuthContext';
// main
const SingIn = ({ setIsSignUp }) => {
  const { signin } = useAuthContext()
  const onFinish = (values) => {

    console.log('Received values of form: ', values);
    signin(values.email, values.password)
  };

  return (
    <div style={{ backgroundColor: "white", padding: "1rem" }}>
      <Form
        name="normal_login"
        initialValues={{ remember: true, }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <span style={{ color: '#3DB489' }} className="login-form-forgot" >
            Forgot password
        </span>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign In
        </Button>
          <span className="mx1"> Or</span>
          <span
            className="pointer"
            style={{ color: '#3DB489' }}
            onClick={() => setIsSignUp(true)}>
            register now!
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SingIn 