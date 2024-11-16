import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

export const ReportsAndAnalytics = () => {
  // Sample data
  const totalStudents = 100;
  const presentStudents = 52;
  const absentStudents = 40;
  const lateStudents = 28;

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
        
        {/* Table for Pie Chart */}
        <table className="chart-table">
          <thead>
            <tr>
              <th>Attendance Status</th>
              <th>Count</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Present</td>
              <td>{presentStudents}</td>
              <td>{((presentStudents / totalStudents) * 100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Absent</td>
              <td>{absentStudents}</td>
              <td>{((absentStudents / totalStudents) * 100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Late</td>
              <td>{lateStudents}</td>
              <td>{((lateStudents / totalStudents) * 100).toFixed(2)}%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bar Chart */}
      <div className="chart-container">
        <h3>Department Breakdown</h3>
        <Bar data={barData} options={options} />
        
        {/* Table for Bar Chart */}
        <table className="chart-table">
          <thead>
            <tr>
              <th>Department</th>
              <th>Number of Students</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dev</td>
              <td>{barData.datasets[0].data[0]}</td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>{barData.datasets[0].data[1]}</td>
            </tr>
            <tr>
              <td>Design</td>
              <td>{barData.datasets[0].data[2]}</td>
            </tr>
          </tbody>
        </table>
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
        
        {/* Table for Line Chart (Overtime) */}
        <table className="chart-table">
          <thead>
            <tr>
              <th>Week</th>
              <th>Overtime Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Week 1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Week 2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Week 3</td>
              <td>1.5</td>
            </tr>
            <tr>
              <td>Week 4</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
