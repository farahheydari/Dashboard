'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'Sunday',
    order: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Monday',
    order: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Tuesday',
    order: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Wednesday',
    order: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Thursday',
    order: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Friday',
    order: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Saturday',
    order: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const SimpleAreaChart = () => {
  return (
    <AreaChart
      style={{ width: '100%', maxWidth: '550px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Area type="monotone" dataKey="order" stroke="#8884d8" fill="#46ceb1" />
    </AreaChart>
  );
};

export default SimpleAreaChart;