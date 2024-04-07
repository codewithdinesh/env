// components/InteractiveChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const InteractiveChart = ({ data }) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: 'Amount',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: Object.values(data)
            }
        ]
    };

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                type: 'category'
            }]
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Interactive Chart</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default InteractiveChart;
