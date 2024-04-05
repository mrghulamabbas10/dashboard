'use client'
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const ApexChart: React.FC = () => {
  const [state] = useState({
    series: [
      {
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          // Rest of your data...
        ],
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'CandleStick Chart',
        align: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  })

  return (
    <div>
      <div id='chart'>
        <ReactApexChart
          options={state.options as any}
          series={state.series}
          type='candlestick'
          height={350}
        />
      </div>
      <div id='html-dist'></div>
    </div>
  )
}

export default ApexChart
