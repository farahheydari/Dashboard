'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'January',
    accept: 4000,
    reject: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    accept: 3000,
    reject: 1398,
    amt: 2210,
  },
  {
    name: 'March ',
    accept: 2000,
    reject: 9800,
    amt: 2290,
  },
  {
    name: 'April ',
    accept: 2780,
    reject: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    accept: 1890,
    reject: 4800,
    amt: 2181,
  },
  {
    name: 'June ',
    accept: 2390,
    reject: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    accept: 3490,
    reject: 4300,
    amt: 2100,
  },
];

const BarChartHasBackground = () => {
  return (
    <BarChart
      width={500} 
      height={300} 
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#e9e3e3" />
      
      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
      
      <YAxis width={50} /> 
      
      <Tooltip />
      <Legend 
        wrapperStyle={{ bottom: 0, right: -25 }} 
      />
      <Bar dataKey="reject" fill="#8884d8" name="reject" background={{ fill: '#fadede' }} />
      <Bar dataKey="accept" fill="#82ca9d" name="accept" />
    </BarChart>
  );
};

export default BarChartHasBackground;
