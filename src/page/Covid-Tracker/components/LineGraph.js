import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import axios from 'axios';
import numeral from 'numeral'


const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};


const LineGraph = ({ casesType }) => {

  const [chartData, setChartData] = useState()

  useEffect(() => {
    getChartData()
    // eslint-disable-next-line
  }, [casesType])

  const getChartData = async () => {
    const { data } = await axios.get(`https://disease.sh/v3/covid-19/historical/all?lastdays=120`)
    const _chartData = buildChartData(data, casesType)
    setChartData(_chartData)
  }

  return (
    <div>
      {chartData?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: chartData
              }
            ]
          }}
          options={options}
        />)}
    </div>
  );
}

export default LineGraph;