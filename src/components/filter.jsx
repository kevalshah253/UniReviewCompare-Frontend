import React from 'react';

const Filter = () => {
  return (
    <div className="filter-button-wrapper">
      <button className="action-button filter jsFilter">
        <span>Filter</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-filter"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      </button>
      <div className="filter-menu">
        <label>Location</label>
        <select>
          <option>All Locations</option>
          <option>Cambridge, Massachusetts</option>
          <option>Stanford, California</option>
          <option>Oxford, United Kingdom</option>
          {/* Add more locations as needed */}
        </select>
        <label>Tuition</label>
        <select>
          <option>All Tuitions</option>
          <option>Less than $10,000 CAD</option>
          <option>$10,000 - $20,000 CAD</option>
          <option>$20,000 - $30,000 CAD</option>
          {/* Add more tuition ranges as needed */}
        </select>
        <label>Acceptance Rate</label>
        <select>
          <option>All Acceptance Rates</option>
          <option>Less than 20%</option>
          <option>20% - 40%</option>
          <option>40% - 60%</option>
          {/* Add more acceptance rate ranges as needed */}
        </select>
        <div className="filter-menu-buttons">
          <button className="filter-button reset">Reset</button>
          <button className="filter-button apply">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
