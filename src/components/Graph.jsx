import React from "react";
import styled from "styled-components";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { COLORS } from "../constants/colors";

const Graph = () => {
  const gridLineColor = "#292922";
  const marker = {
    symbol: 'circle',
    fillColor: '#fff',
    lineWidth: 2,
    lineColor: '',
    states: {
      hover: {
        radius: 4,
        lineWidth: 4,
      },
    },
  };

  const options = {
    title: { text: '' },
    credits: { enabled: false },
    chart: { type: 'spline', backgroundColor: '#292929', borderRadius:5 },
    xAxis: {
      lineWidth: 1,
      tickLength: 0,
      lineColor: gridLineColor,
      labels: {
        step: 1,
        autoRotation: [0],
        y: 30,
        style: {
          color: '#fff',
          fontSize: '11px',
          lineHeight: '14px',
          letterSpacing: 0,
        },
      },
      crosshair: {
        width: 3,
        color: 'gridLineColor',
      },
      plotLines:[{
        color: '#fff'
      }]
    },
    yAxis: {
      tickPixelInterval: 50,
      floor: 0,
      min: 0,
      title: { text: '' },
      gridLineColor: gridLineColor,
      minPadding: 10,
      offset: 50,
      tickLength: 40,
      tickPosition: 'inside',
      tickWidth: 1,
      labels: {
        align: 'left',
        x: 0,
        y: -8,
        style: {
          color: '#fff',
        },
      },
      crosshair: COLORS.PINK,
    },
    legend: {
      enabled: true,
      align: 'right',
      verticalAlign: 'top',
      layout: 'horizontal',
      itemDistance: 20,
      margin: 50,
      symbolPadding: 5,
      itemStyle: {
        color: '#fff',
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: 0,
      },
      itemHoverStyle: {
        color: '#fff',
      },
    },
    colorAxis: {

    },
    series: [
      {
        name: 'Hoje',
        id: 'current',
        type: 'spline',
        data: [1, 5, 3],
        color: COLORS.PINK,
        lineWidth: 1.5,
        marker,
      }
    ],
  };
  return(
    <GraphTag>
      <HighchartsReact options={options}  highcharts={Highcharts} />
    </GraphTag>
  )
};

const GraphTag = styled.div`
  path.highcharts-tick{
    stroke: #292929 !important;
  }
`;

export default Graph;
