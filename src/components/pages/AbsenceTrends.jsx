import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import profile from '../images/profile.png';
import './Pages.css';

export const AbsenceTrends = () => {
  const [startDate, setStartDate] = useState(new Date());

  const employees = [
    { id: 1, date: '13/09', name: 'Monalisa', role: 'Design', type: 'Full-Time', status: 'Absent', checkIn: '--', checkOut: '--', overtime: '0h' },
    { id: 2, date: '13/09', name: 'Shalom N', role: 'Marketing', type: 'Full-Time', status: 'Absent', checkIn: '--', checkOut: '--', overtime: '0h' },
    { id: 3, date: '13/09', name: 'Charity C', role: 'Dev', type: 'Full-Time', status: 'Absent', checkIn: '--', checkOut: '--', overtime: '0h' },
    { id: 4, date: '13/09', name: 'Rutendo', role: 'Marketing', type: 'Full-Time', status: 'Absent', checkIn: '--', checkOut: '--', overtime: '0h' },
    { id: 5, date: '13/09', name: 'Bridget B', role: 'Design', type: 'Full-Time', status: 'Absent', checkIn: '--', checkOut: '--', overtime: '0h' },
    { id: 6, date: '13/09', name: 'Tashinga M', role: 'Design', type: 'Full-Time', status: 'Absent', checkIn: '--', checkOut: '--', overtime: '0h' },
  ];

  // Filter for absent employees
  const absentEmployees = employees.filter(emp => emp.status === 'Absent');
  const totalAbsences = absentEmployees.length;

  return (
    <div className="home">
      {/* Header */}
      <div className="wbhead-icons">
        <h3 className="wbhead">
          <span className="span">Absence Trends</span>
        </h3>
        <div className="wbicons">
          <img className="profile" src={profile} alt="Instructor Profile" />
        </div>
      </div>

      {/* Content Section */}
      <div className="home-content">
        <div className="date-div">
          <h2>
            <strong>Absence Report</strong>
          </h2>
          <p>{new Date().toLocaleString()}</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-cards">
          <div className="stats-card">
            <p>Total Absences</p>
            <h3>{totalAbsences}</h3>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-filter-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, role, department..."
          />
          <button className="filter-btn">
            <i className="ri-filter-3-line"></i>Filter
          </button>
          <select className="dept-dropdown">
            <option>All Departments</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Development</option>
          </select>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd MMM, yyyy"
            className="date-picker"
          />
        </div>

        {/* Absence Table */}
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Student</th>
              <th>Specialising In</th>
              <th>Employment Type</th>
              <th>Status</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Overtime</th>
            </tr>
          </thead>
          <tbody>
            {absentEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.date}</td>
                <td>
                  <Link to={`/students/${employee.id}`}>{employee.name}</Link>
                </td>
                <td>{employee.role}</td>
                <td>
                  <span className="emp-type">{employee.type}</span>
                </td>
                <td>
                  <span className={`status ${employee.status.toLowerCase()}`}>
                    {employee.status}
                  </span>
                </td>
                <td>{employee.checkIn}</td>
                <td>{employee.checkOut}</td>
                <td>{employee.overtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
