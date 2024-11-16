import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import profile from '../images/profile.png';
import './Pages.css';

export const MainDash = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('All Departments');

  // Employee data with unique IDs
  const employees = [
    { id: 1, date: '13/09', name: 'Dylan R', role: 'Dev', type: 'Full-Time', status: 'Present', checkIn: '10:15 AM', checkOut: '04:00 PM', overtime: '0h' },
    { id: 2, date: '13/09', name: 'Deanunvan T', role: 'Dev', type: 'Full-Time', status: 'Late', checkIn: '10:15 AM', checkOut: '04:00 PM', overtime: '0h' },
    { id: 3, date: '13/09', name: 'Wisdom B', role: 'Dev', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '05:00 PM', overtime: '1h' },
    { id: 4, date: '13/09', name: 'Daniel M', role: 'Dev', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '04:00 PM', overtime: '0h' },
    { id: 5, date: '13/09', name: 'Takunda B', role: 'Dev', type: 'Full-Time', status: 'Late', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 6, date: '13/09', name: 'Natasha S', role: 'Dev', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 7, date: '13/09', name: 'Rutendo M', role: 'Dev', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 8, date: '13/09', name: 'Enetty R', role: 'Marketing', type: 'Full-Time', status: 'Late', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 9, date: '13/09', name: 'Ropafadzo M', role: 'Marketing', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 10, date: '13/09', name: 'Kundai N', role: 'Design', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 11, date: '13/09', name: 'Tanashe G', role: 'Design', type: 'Full-Time', status: 'Late', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 12, date: '13/09', name: 'Author S', role: 'Design', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 13, date: '13/09', name: 'Monalisa', role: 'Design', type: 'Full-Time', status: 'Absent', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 14, date: '13/09', name: 'Tatenda G', role: 'Design', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 15, date: '13/09', name: 'Shalom N', role: 'Marketing', type: 'Full-Time', status: 'Absent', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 16, date: '13/09', name: 'Ruvarashe m', role: 'Design', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 17, date: '13/09', name: 'Sean M', role: 'Dev', type: 'Full-Time', status: 'Late', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 18, date: '13/09', name: 'Lisa M', role: 'Design', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 19, date: '13/09', name: 'Tandai K', role: 'Design', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 20, date: '13/09', name: 'Charity C', role: 'Dev', type: 'Full-Time', status: 'Absent', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 21, date: '13/09', name: 'Rutendo', role: 'Marketing', type: 'Full-Time', status: 'Absent', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 22, date: '13/09', name: 'Tanatswa C', role: 'Marketing', type: 'Full-Time', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 23, date: '13/09', name: 'Bridget B', role: 'Design', type: 'Full-Time', status: 'Absent', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
    { id: 24, date: '13/09', name: 'Tashinga M', role: 'Design', type: 'Full-Time', status: 'Absent', checkIn: '09:00 AM', checkOut: '06:00 PM', overtime: '2h' },
  ];

  // Filter and search logic
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDept === 'All Departments' || employee.role === filterDept;
    return matchesSearch && matchesDept;
  });

  // Stats calculations
  const totalEmployees = employees.length;
  const presentEmployees = employees.filter((emp) => emp.status === 'Present').length;
  const absentEmployees = employees.filter((emp) => emp.status === 'Absent').length;
  const lateEmployees = employees.filter((emp) => emp.status === 'Late').length;

  return (
    <div className="home">
      {/* Header */}
      <div className="wbhead-icons">
        <h3 className="wbhead">
          <span className="span">Welcome back</span>, Simbarashe Mahlaulo ☀️
        </h3>
        <div className="wbicons">
          <img className="profile" src={profile} alt="Instructor Profile" />
        </div>
      </div>

      {/* Content Section */}
      <div className="home-content">
        {/* Date and Stats Section */}
        <div className="date-div">
          <h2>
            <strong>Student Attendance</strong>
          </h2>
          <p>{new Date().toLocaleString()}</p>
        </div>

        <div className="stats-cards">
          <div className="stats-card">
            <p>Total Students</p>
            <h3>{totalEmployees}</h3>
          </div>
          <div className="stats-card">
            <p>Present Workforce</p>
            <h3>{presentEmployees}</h3>
          </div>
          <div className="stats-card">
            <p>Absent Workforce</p>
            <h3>{absentEmployees}</h3>
          </div>
          <div className="stats-card">
            <p>Late arrivals</p>
            <h3>{lateEmployees}</h3>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-filter-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, role, department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="filter-btn" onClick={() => setSearchTerm('')}>
            <i className="ri-filter-3-line"></i>Filter
          </button>
          <select
            className="dept-dropdown"
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
          >
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

        {/* Attendance Table */}
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
            {filteredEmployees.map((employee) => (
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
