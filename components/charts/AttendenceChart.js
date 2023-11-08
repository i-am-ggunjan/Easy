import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip } from 'recharts';
import { useGetWidth } from '../hooks/useGetWidth';

const data = [
    { name: 'Jan', value: 50 },
    { name: 'Feb', value: 75 },
    { name: 'Mar', value: 50 },
    { name: 'Mar', value: 20 },
    { name: 'Mar', value: 70 },
    { name: 'Jun', value: 80 },
];

const AttendenceChart = () => {
    const [chartRef, width] = useGetWidth();

    return (
        <div className='-ml-8' ref={chartRef}>
            <LineChart width={width} height={200} data={data} margin={{ left: 0 }}>
                <XAxis dataKey="name" axisLine={false} tick={{ fontSize: 12 }} />
                <YAxis
                    dataKey="value"
                    domain={[0, 100]}
                    tickCount={6}
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                />
                <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#FFC81D" activeDot={{ r: 5, fill: "0B405D" }} />
            </LineChart>
        </div>
    );
};

export default AttendenceChart;
