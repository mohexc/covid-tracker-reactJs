import { Card, Form, Input, Select } from 'antd'
import React from 'react'

// main
const PersonalInformationForm = () => {
  return (
    <Card style={{ borderRadius: "10px", marginBottom: "1rem" }}>
      PersonalInformationForm
      <Form>
        <Form.Item name='titleName' label='Title' rules={[{ required: true, message: 'Please input your username!', },]}>
          <Select style={{ width: "200px" }}>
            {['Mr.', 'Mrs.', 'Ms.'].map(title => <Select.Option key={title} value={title}>{title}</Select.Option>)}
          </Select>
        </Form.Item>
        <Form.Item name='titleName'>
          <Input />
        </Form.Item>
      </Form>

    </Card>
  )
}

export default PersonalInformationForm
