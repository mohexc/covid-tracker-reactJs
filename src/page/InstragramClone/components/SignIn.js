import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignIn = () => {
  const onFinish = (values) => {
    message.success('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Failed:', errorInfo);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: "1rem" }}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true, }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!', },]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!', },]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            SIGNIN
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


export default SignIn
