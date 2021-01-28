import React from 'react'
import { Card, DatePicker, Form, Input, Radio, Select, Typography, Button, Row, Col, InputNumber, message } from 'antd'
import { countries } from 'countries-list'
import moment from 'moment'
import { usePersonalInfoContext } from '../../../context/PersonalInfoContext'
import { useForm } from 'antd/lib/form/Form'

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
          <span>{country.emoji}</span>
          <span>+{country.phone}</span>
        </Row>
      </Select.Option>)}
    </Select>
  </Form.Item>
);


// main
const PersonalInformationForm = () => {
  const { createPersonalInfo } = usePersonalInfoContext()

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const birthDay = moment(values.birthDay).format("DD-MM-YYYY")
      values.birthDay = birthDay
      createPersonalInfo(values)
      message.success("Save Success")
    } catch (error) {
      const result = error.response
        ? error.response.data.message
        : error.response
      message.error(result)
    }
  }

  const handleReset = () => form.resetFields();

  const handleOnFill = () => {
    try {
      form.setFieldsValue({
        citizenId: [1, 2222, 33333, 44, 5],
        expectedSalary: "4000000",
        firstName: "John",
        gender: "female",
        lastName: "Doe",
        nationlity: "Thailand",
        passportNumber: "cxcvcxvx",
        phone: "061888999",
        prefixPhone: "66",
        titleName: "Mrs.",
      });
    } catch (error) {
      message.error(error)
    }

  };

  return (
    <Card style={{ borderRadius: "10px", marginBottom: "1rem" }}>
      <Typography.Title level={4}>Personal Information Form</Typography.Title>
      <Form
        form={form}
        labelAlign='left'
        onFinish={onFinish}
        initialValues={{ prefixPhone: '66', }}>
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
            <Form.Item
              name='lastName'
              label="Last Name"
              rules={[{ required: true, message: 'Please input your Last name!', },]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={6}>
            <Form.Item name='birthDay' label="Birthday" rules={[{ required: true, message: 'Please input your Birthday!', },]}>
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
                {countriesList().map(country => <Select.Option key={country.name} value={country.name}><span>{country.name}</span></Select.Option>)}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* citizenId */}
        <Form.Item name='citizenId' label={<span><span style={{ color: "red" }}>*</span><span> Citizen ID</span></span>} style={{ marginBottom: '0px' }}>
          <Input.Group>
            <Row gutter={24}>
              <Col span={2}><Form.Item rules={[
                { type: "number", required: true, message: "Please input your Number!" },
                {
                  validator: (_, value) => {
                    if (value.toString().length < 1) {
                      return Promise.reject('Please complete 1 characters.')
                    }
                    return Promise.resolve()
                  }
                }
              ]} name={['citizenId', 0]}>
                <InputNumber maxLength="1" style={{ width: '100%' }} />
              </Form.Item>
              </Col>
              <Col span={3}><Form.Item rules={[
                { type: "number", required: true, message: "Please input your Number!" },
                {
                  validator: (_, value) => {
                    if (value.toString().length < 4) {
                      return Promise.reject('Please complete 4 characters.')
                    }
                    return Promise.resolve()
                  }
                }
              ]} name={['citizenId', 1]}><InputNumber maxLength="4" style={{ width: '100%' }} /></Form.Item></Col>
              <Col span={4}><Form.Item rules={[
                { type: "number", required: true, message: "Please input your Number!" },
                {
                  validator: (_, value) => {
                    if (value.toString().length < 5) {
                      return Promise.reject('Please complete 5 characters.')
                    }
                    return Promise.resolve()
                  }
                }
              ]} name={['citizenId', 2]}><InputNumber maxLength="5" style={{ width: '100%' }} /></Form.Item></Col>
              <Col span={2}><Form.Item rules={[
                { type: "number", required: true, message: "Please input your Number!" },
                {
                  validator: (_, value) => {
                    if (value.toString().length < 2) {
                      return Promise.reject('Please complete 2 characters.')
                    }
                    return Promise.resolve()
                  }
                }
              ]} name={['citizenId', 3]}><InputNumber maxLength="2" style={{ width: '100%' }} /></Form.Item></Col>
              <Col span={2}><Form.Item rules={[
                { type: "number", required: true, message: "Please input your Number!" },
                {
                  validator: (_, value) => {
                    if (value.toString().length < 1) {
                      return Promise.reject('Please complete 1 characters.')
                    }
                    return Promise.resolve()
                  }
                }
              ]} name={['citizenId', 4]}><InputNumber maxLength="1" style={{ width: '100%' }} /></Form.Item></Col>
            </Row>
          </Input.Group>
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
          <Input style={{ width: "200px" }} />
        </Form.Item>

        <Form.Item name="expectedSalary" label="Expected Salary" rules={[{ required: true, message: "Please input your Number!" }]}>
          <Input type="number" style={{ width: "200px" }} />
        </Form.Item>

        <Row gutter={[24, 24]}>
          <Col xs={{ span: 24 }} md={{ span: 4, offset: 12 }}>
            <Form.Item noStyle >
              <Button block htmlType="submit" type="primary">SUBMIT</Button >
            </Form.Item>
          </Col>
          <Col xs={24} md={4}><Button block onClick={handleReset}>RESET</Button></Col>
          <Col xs={24} md={4}><Button block onClick={handleOnFill}>FILL FORM</Button></Col>
        </Row>

      </Form>
    </Card>
  )
}

export default PersonalInformationForm
