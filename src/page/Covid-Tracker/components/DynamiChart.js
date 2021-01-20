import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { Bar } from 'react-chartjs-2'
import axios from 'axios';
const DynamiChart = ({ }) => {

  const [state, setstate] = useState()
  useEffect(() => {
    getContriesInfo()
  }, [])

  const getContriesInfo = async () => {
    const { data } = await axios.get(`https://disease.sh/v3/covid-19/all`)
    setstate(data)
  }
  return (
    <div>
      <Bar
        data={state}
        width={100}
        height={50}
        options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default DynamiChart;