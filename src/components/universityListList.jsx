import React from 'react';
import { Rating, Stack } from '@mui/material'; 
import '../css/dash.scss';

const UniversityListList  = (props) => {
  return (
    <>
      {props.cards.map((university, index) =>( // Map through the dummy data
        <div className="products-row" key={university.id}>
          <button className="cell-more-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="12" cy="5" r="1"/>
              <circle cx="12" cy="19" r="1"/>
            </svg>
          </button>
          <div className="product-cell image">
            <img src={university.image} alt={university.university} /> {/* Use university.image */}
            <span>{university.university}</span> {/* Use university.company */}
          </div>
          <div className="product-cell category">
            <span className="cell-label">Location:</span>{university.location} {/* Use university.location */}
          </div>
          <div className="product-cell status-cell">
            <span className="cell-label">Status:</span>
            <span className="status active">{university.tuition}</span> {/* Use university.tuition */}
          </div>
          <div className="product-cell sales">
            <span className="cell-label">Acceptance Rate:</span>{university.acceptanceRate} {/* Use university.acceptanceRate */}
          </div>
          <div className="product-cell price">
            <span className="cell-label">Rating:</span>
            <Stack spacing={1}>
              <Rating name="half-rating" value={university.rating} precision={0.5} readOnly /> {/* Use university.rating */}
            </Stack>
          </div>
        </div>
      ))}
    </>
  );
};

export default UniversityListList;
