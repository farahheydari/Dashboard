'use client'
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  {
    name: 'Docters',
    uv: 31.47,
    pv: 520,
    fill: '#3e399e',
  },
  {
    name: 'Nurses',
    uv: 26.69,
    pv: 6992,
    fill: '#78839b',
  },
  {
    name: 'Patients',
    uv: 15.69,
    pv: 7509,
    fill: '#2e7281',
  },
  {
    name: 'Pharmacusts',
    uv: 8.22,
    pv: 84,
    fill: '#37b868',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
  
};

const SimpleRadialBarChart = () => {
  return (

    <RadialBarChart
      width="90%" 
      height="100%" 
      cx="40%"
      barSize={20}
      data={data}
      marginLeft="40px"
      
    >
      <RadialBar 
        label={{ position: 'insideStart', fill: '#fff', fontSize:10 }} 
        background 
        dataKey="uv" 
      />
      <Legend 
        iconSize={10} 
        layout="vertical" 
        verticalAlign="middle" 
        wrapperStyle={style} 
      />
    </RadialBarChart>
  );
};

export default SimpleRadialBarChart;
