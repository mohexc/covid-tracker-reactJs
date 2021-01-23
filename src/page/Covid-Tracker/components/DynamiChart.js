import React, { useState } from 'react';
import { DynamicBarChart } from 'react-dynamic-charts';
import 'react-dynamic-charts/dist/index.css';
import axios from 'axios';
import { message, Select, Skeleton } from 'antd';
import { useQuery } from 'react-query'

const getContriesInfo = async (day) => {
  try {
    const { data } = await axios.get(`https://disease.sh/v3/covid-19/historical?lastdays=${day}`)

    const date = Object.keys(data[0].timeline.cases)

    const countryAndCases = data.map(d => ({ country: d.country, cases: d.timeline.cases }))
    const mappedValues = countryAndCases.map((d, index) => {
      const values = []
      for (const property in d.cases) {
        values.push({
          "id": `${d.country}`,
          "label": `${d.country}`,
          "value": `${d.cases[property]}`,
        })
      }
      return values
    })
    console.log(mappedValues)
    debugger

    const mappedName = date.map((day, index) => {
      const values = mappedValues.map((v) => v[index])
      return {
        "name": `${day}`,
        "values": values
      }
    })
    // setstate(mappedName)
    debugger
    return mappedName
  } catch (error) {
    const result = error.response
      ? error.response.data.message
      : error.message
    message.error(result)
  }
}

// main
const DynamiChart = () => {
  const [state, setstate] = useState(30)

  const { status, data, error } = useQuery(['ContriesInfo', state], () => getContriesInfo(state))

  const handleChangeSelect = (values) => {
    setstate(values)
  }


  if (status === 'loading') {
    return <Skeleton active />
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }
  return (
    <div style={{

      overflowY: "auto",
      width: "100%"
    }}>

      <Select style={{ width: "200px" }} value={state} onChange={handleChangeSelect}>
        <Select.Option value={30}>30 DAY</Select.Option>
        <Select.Option value={60}>60 DAY</Select.Option>
        <Select.Option value={90}>90 DAY</Select.Option>
        <Select.Option value={120}>120 DAY</Select.Option>
        <Select.Option value={150}>150 DAY</Select.Option>
        <Select.Option value={200}>200 DAY</Select.Option>
      </Select>
      <DynamicBarChart
        data={data}
        barHeight={15}
        chartWrapperStyles={{ width: '100%' }}
        iterationTitleStyles={{ fontSize: '25px', textAlign: 'left' }}
      />

    </div>
  );
}

export default DynamiChart;