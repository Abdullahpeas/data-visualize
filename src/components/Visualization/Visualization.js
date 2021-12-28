import React from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Visualization.css';


const Visualization = () => {
    const rangeData = [
        {
            "day": "06-01",
            "temperature": [
                -1,
                8
            ]
        },
        {
            "day": "06-02",
            "temperature": [
                4,
                10
            ]
        },
        {
            "day": "06-03",
            "temperature": [
                5,
                15
            ]
        },
        {
            "day": "06-04",
            "temperature": [
                6,
                18
            ]
        },
        {
            "day": "06-05",
            "temperature": [
                9,
                19
            ]
        },
        {
            "day": "06-06",
            "temperature": [
                3,
                16
            ]
        },
        {
            "day": "06-07",
            "temperature": [
                5,
                12
            ]
        },
        {
            "day": "06-08",
            "temperature": [
                0,
                7
            ]
        },
        {
            "day": "06-09",
            "temperature": [
                -2,
                3
            ]
        }
    ]


    return (
        <>
            <div className='row container mt-3'>


                <div className='col-md-6'>
                    <h4 id='temp'>Temperature of January</h4>
                </div>
                <div className='col-md-6'>
                    <AreaChart
                        width={730}
                        height={250}
                        data={rangeData}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}
                    >
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
                        <Tooltip />
                    </AreaChart>
                </div>
            </div>
        </>
    );
};

export default Visualization;