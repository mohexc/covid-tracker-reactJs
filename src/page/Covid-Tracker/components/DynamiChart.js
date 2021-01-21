import React, { useEffect, useState } from 'react';
import { DynamicBarChart } from 'react-dynamic-charts';
import 'react-dynamic-charts/dist/index.css';
import axios from 'axios';
import { message } from 'antd';

const DynamiChart = () => {
  const [state, setstate] = useState()

  useEffect(() => {
    getContriesInfo()
  }, [])

  const getContriesInfo = async () => {
    try {
      const { data } = await axios.get(`https://disease.sh/v3/covid-19/historical?lastdays=150`)

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
      setstate(mappedName)
      debugger
    } catch (error) {
      const result = error.response
        ? error.response.data.message
        : error.message
      message.error(result)
    }

  }
  return (
    <div style={{
      height: "620px",
      overflowY: "auto",
      width: "100%"
    }}>
      {state && <DynamicBarChart
        data={state}
        barHeight={15}
        // mainWrapperStyles={{
        //   width: "100px"
        // }}
        chartWrapperStyles={{
          width: '100%'
        }}
        iterationTitleStyles={{
          fontSize: '25px',
          textAlign: 'left'
        }}
      />}

    </div>
  );
}

export default DynamiChart;