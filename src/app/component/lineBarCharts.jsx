'use client'

import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';

const data = [
  {
    name: 'Jan',
    sale: 590,
    revenue: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: ' Feb',
    sale: 868,
    revenue: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Mar',
    sale: 1397,
    revenue: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Apr',
    sale: 1480,
    revenue: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'May',
    sale: 1520,
    revenue: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Jun',
    sale: 1400,
    revenue: 680,
    amt: 1700,
    cnt: 380,
  },
];

const LineBarAreaComposedChart = () => {
  return (
    <ComposedChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="revenue" barSize={20} fill="#08202e" />
      <Line type="monotone" dataKey="sale" stroke="#ff7300" />
      <Scatter dataKey="cnt" fill="red" />
    </ComposedChart>
  );
};

export default LineBarAreaComposedChart;