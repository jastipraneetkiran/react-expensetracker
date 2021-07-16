import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar';
export default function Chart(props) {
    const dataPointsValue = props.datapoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointsValue);
    return (
        <div className="chart">
            {props.datapoints.map(datapoint => <ChartBar  key={datapoint.label} label={datapoint.label} value={datapoint.value} maxValue={totalMax}/>)}
        </div>
        );
}