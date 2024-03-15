import React from 'react';
import { Rating, Stack } from '@mui/material'; 
import '../css/dash.scss';

const UniversityListList = () => {
  return (
    <div className="products-row">
      <button className="cell-more-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="12" cy="5" r="1"/>
          <circle cx="12" cy="19" r="1"/>
        </svg>
      </button>
      <div className="product-cell image">
        <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product"/>
        <span>Laurentian University</span>
      </div>
      <div className="product-cell category">
        <span className="cell-label">Location:</span>Ontario
      </div>
      <div className="product-cell status-cell">
        <span className="cell-label">Status:</span>
        <span className="status active"> CAD 30000</span>
      </div>
      <div className="product-cell sales">
        <span className="cell-label">Acceptance Rate:</span>11
      </div>
      {/* <div className="product-cell stock"><span className="cell-label">Stock:</span>36</div> */}
      <div className="product-cell price">
        <span className="cell-label">Rating:</span>
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
      </div>
    </div>
  );
};

export default UniversityListList;
