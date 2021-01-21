import React, { useEffect, useState } from 'react';
import { DynamicBarChart } from 'react-dynamic-charts';
import axios from 'axios';

const DynamiChart = () => {
  const [state, setstate] = useState()

  useEffect(() => {
    getContriesInfo()
  }, [])

  const getContriesInfo = async () => {
    const { data } = await axios.get(`https://disease.sh/v3/covid-19/historical?lastdays=30`)

    const date = Object.keys(data[0].timeline.cases)

    const countryAndCases = data.map(d => ({ country: d.country, cases: d.timeline.cases }))
    const mappedValues = countryAndCases.map(d => {
      const values = []
      for (const property in d.cases) {
        values.push({
          "id": `${d.country}`,
          "label": `${d.country}`,
          "value": `${d.cases[property]}`,
          "color": ["black"]
        })
      }
      return values
    })

    const mappedData2 = date.map((day) => {
      const values = mappedValues.map((v, index) => v[index])
      return {
        "name": `${day}`,
        "values": values
      }
    })
    setstate(mappedData2)
  }
  return (
    <div>
      <DynamicBarChart data={state} iterationTimeout={30000} />
    </div>
  );
}

export default DynamiChart;