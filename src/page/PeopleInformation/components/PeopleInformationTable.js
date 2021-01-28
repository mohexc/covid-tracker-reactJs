import { Card, Table, Row, Col, Input, Button } from 'antd'
import { Handler } from 'leaflet'
import React, { useEffect, useState } from 'react'
import { usePersonalInfoContext } from '../../../context/PersonalInfoContext'
import ListOperation from './ListOperation'

// main
const PeopleInformationTable = () => {
  const [dataTable, setDataTable] = useState([])
  const { getPeoplelInfo, peopleInfoList } = usePersonalInfoContext()

  useEffect(() => {
    const data = getPeoplelInfo()
    setDataTable(data)
    // eslint-disable-next-line
  }, [peopleInfoList])

  const columns = [
    {
      key: "name",
      title: "Name",
      render: (row) => <span>{row.name}</span>
    },
    {
      key: "gender",
      title: "Gender",
      render: (row) => <span>{row.gender}</span>
    },
    {
      key: "mobilePhone",
      title: "Mobile Phone",
      render: (row) => <span>{row.phone}</span>
    },
    {
      key: "nationality",
      title: "Nationality",
      render: (row) => <span>{row.nationlity}</span>
    },
    {
      key: "operation",
      title: "Operation",
      width: "10%",
      render: (row) => <ListOperation id={row.id} />

    },
  ]

  const handleSearch = (values) => {

  }

  const handlerDeleateAll = () => {

  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },

  };


  return (
    <Card style={{ borderRadius: "10px" }}>
      <Row align="middle" style={{ marginBottom: "1rem" }}>
        <Col lg={12}>
          <Row align="middle" gutter={[24]}>
            <Col xs={4}> <h1><strong>All</strong> : {dataTable.length}</h1></Col>
            <Col xs={4}><Button type="primary" block onClick={handlerDeleateAll}>Delete</Button></Col>
          </Row>
        </Col>
        <Col lg={12}>
          <Row gutter={[24]}>
            <Col xs={{ span: 12, offset: 12 }}> <Input.Search onSearch={handleSearch} enterButton /></Col>
            {/* <Col xs={8}><Button type="primary" block>Create</Button></Col> */}
          </Row>
        </Col>
      </Row>

      <Table
        rowKey={(record) => record._id}
        rowSelection={{ ...rowSelection }}
        bordered
        columns={columns}
        dataSource={dataTable}
        pagination={{ position: ['topRight', 'bottomRight'] }}
      />
    </Card>
  )
}

export default PeopleInformationTable
