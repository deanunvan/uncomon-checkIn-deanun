import React from 'react';
import { useParams } from 'react-router-dom';

export const StudentDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Student Details for ID: {id}</h2>
      {/* Fetch and display specific student data here */}
    </div>
  );
};
