import React from 'react';
import { Funnel, FunnelChart, LabelList, Pie, PieChart, Tooltip } from 'recharts';
import './SecondData.css';

const SecondData = () => {
    const data = [
        {
            "value": 30,
            "name": "rainy",
            "fill": "#8884d8"
        },
        {
            "value": 35,
            "name": "stormy",
            "fill": "#83a6ed"
        },
        {
            "value": 26,
            "name": "windy",
            "fill": "#8dd1e1"
        },
        {
            "value": 30,
            "name": "sunny",
            "fill": "#82ca9d"
        },
        {
            "value": 38,
            "name": "clear",
            "fill": "#a4de6c"
        }
    ]

    return (
        <>
            <div className='row container'>
                <div className='col-md-6'>
                    <h4 className='second'>January weather's
                        <p style={{ fontSize: '16px' }}>Full months temperature</p></h4>
                </div>

                <div className='col-md-6'>
                    <FunnelChart width={730} height={250}>
                        <Tooltip />
                        <Funnel
                            dataKey="value"
                            data={data}
                            isAnimationActive
                        >
                            <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                        </Funnel>
                    </FunnelChart>
                </div>
            </div>
        </>
    );
};

export default SecondData;