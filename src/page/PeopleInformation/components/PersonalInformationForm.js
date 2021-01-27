import React from 'react'
import { Card, DatePicker, Form, Input, Radio, Select, Typography, Button, Row, Col } from 'antd'
import { countries } from 'countries-list'

const countriesList = () => {
  let list = []
  for (const property in countries) {
    list.push(countries[property])
  }
  return list
}
const prefixSelector = (
  <Form.Item name="prefixPhone" noStyle>
    <Select allowClear showSearch style={{ width: '100px', }}>
      {countriesList().map(country => <Select.Option key={country.name} value={country.phone}>
        <Row justify="space-between">
          <spa>{country.emoji}</spa>
          <spa> +{country.phone}</spa>
        </Row>
      </Select.Option>)}
    </Select>
  </Form.Item>
);


// main
const PersonalInformationForm = () => {

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <Card style={{ borderRadius: "10px", marginBottom: "1rem" }}>
      <Typography.Title level={4}>Personal Information Form</Typography.Title>
      <Form
        labelAlign='left'
        onFinish={onFinish}
        initialValues={{ prefix: 'Thailand', }}>
        <Row gutter={24}>
          <Col xs={4}>
            <Form.Item name='titleName' label='Title' rules={[{ required: true, message: 'Please input your Titel name!', },]}>
              <Select style={{ width: "100%" }}>
                {['Mr.', 'Mrs.', 'Ms.'].map(title => <Select.Option key={title} value={title}>{title}</Select.Option>)}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={9}>
            <Form.Item name='firstName' label="First Name" rules={[{ required: true, message: 'Please input your First name!', },]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={9}>
            <Form.Item name='lastName' label="Last Name" rules={[{ required: true, message: 'Please input your Last name!', },]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={6}>
            <Form.Item name='birtday' label="Birthday" rules={[{ required: true, message: 'Please input your Birthday!', },]}>
              <DatePicker format={'DD/MM/YYYY'} style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col xs={7}>
            <Form.Item name='nationlity' label='Nationlity' rules={[{ required: true, message: 'Please input your Nationlity!', },]}>
              <Select
                allowClear
                showSearch
                placeholder="Search to Select"
                style={{ width: "100%" }}
              >
                {countriesList().map(country => <Select.Option key={country.name} value={country.name}><spa>{country.name}</spa></Select.Option>)}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name='citizenId' label='Citizen ID'>
          <input type="tel" />
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please input your Gender!', },]}>
          <Radio.Group>
            <Radio value="male">male</Radio>
            <Radio value="female">female</Radio>
            <Radio value="unisex">unisex</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please input your Phone number!' }]}>
          <Input addonBefore={prefixSelector} style={{ width: '300px' }} />
        </Form.Item>

        <Form.Item name="passportNumber" label="Passport number" rules={[{ required: true, message: 'Please input your Passport number!' }]}>
          <Input type="number" style={{ width: "200px" }} />
        </Form.Item>

        <Form.Item name="expectedSalary">
          <Form.Item label="Expected Salary" >
            <Input
              type='tel'
              maxLength={2}
              style={{ width: "200px" }} />
            <span className="m1"> THB</span>
          </Form.Item>
        </Form.Item>

        <Form.Item >
          <Button htmlType="submit" type="primary">SUBMIT</Button >
        </Form.Item>
      </Form>


    </Card>
  )
}

export default PersonalInformationForm
