import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

export const ReportsAndAnalytics = () => {
  // Sample data
  const totalStudents = 25;
  const presentStudents = 13;
  const absentStudents = 10;
  const lateStudents = 7;

  const pieData = {
    labels: ['Present', 'Absent', 'Late'],
    datasets: [
      {
        data: [presentStudents, absentStudents, lateStudents],
        backgroundColor: ['#28a745', '#dc3545', '#ff9800'],
        hoverOffset: 4,
      },
    ],
  };

  const barData = {
    labels: ['Dev', 'Marketing', 'Design'],
    datasets: [
      {
        label: 'Students by Department',
        data: [8, 6, 11], // Sample department counts
        backgroundColor: '#0747A1',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.raw !== undefined) {
              label += context.raw + '%';
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="reports-container">
      {/* Pie Chart */}
      <div className="chart-container">
        <h3>Attendance Breakdown</h3>
        <Pie data={pieData} options={options} />
      </div>

      {/* Bar Chart */}
      <div className="chart-container">
        <h3>Department Breakdown</h3>
        <Bar data={barData} options={options} />
      </div>

      {/* Line Chart - For overtime or other metrics */}
      <div className="chart-container">
        <h3>Overtime Report</h3>
        <Bar
          data={{
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
              {
                label: 'Average Overtime Hours',
                data: [1, 2, 1.5, 3], // Example overtime data
                backgroundColor: '#ff9800',
                borderColor: '#ff9800',
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
