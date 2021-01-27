import { Card, Select, Table, Row, Col, Input, Button } from 'antd'
import React from 'react'



const PeopleInformationTable = () => {

  const columns = [
    {
      title: "Name",
      render: (row) => <span>{row.name}</span>
    },
    {
      title: "Gender",
      render: (row) => <span>{row.gender}</span>
    },
    {
      title: "Mobile Phone",
      render: (row) => <span>{row.phone}</span>
    },
    {
      title: "Nationality",
      render: (row) => <span>{row.nationlity}</span>
    },
    {
      title: "Operation",
      width: "10%",
      render: (row) => {

        return <Select placeholder="Opeartion" style={{ width: "100%" }}></Select>
      }
    },
  ]
  const data = [
    {
      id: '1',
      name: "Nut Prohmpiriya",
      gender: "Femal",
      phone: "+661234567890",
      nationlity: "Thai"
    }
  ]


  return (
    <Card style={{ borderRadius: "10px" }}>
      <Row align="middle" style={{ marginBottom: "1rem" }}>
        <Col lg={12}>
          <Row align="middle" gutter={[24]}>
            <Col xs={4}> <h1><strong>All</strong> : 20</h1></Col>
            <Col xs={4}><Button type="primary" block>Delete</Button></Col>
          </Row>
        </Col>
        <Col lg={12}>
          <Row gutter={[24]}>
            <Col xs={16}> <Input.Search enterButton /></Col>
            <Col xs={8}><Button type="primary" block>Create</Button></Col>
          </Row>


        </Col>
      </Row>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        pagination={{ position: ['topRight', 'bottomRight'] }}

      />
    </Card>
  )
}

export default PeopleInformationTable
