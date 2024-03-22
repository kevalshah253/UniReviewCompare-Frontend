import React, { useState } from 'react';
import { Box, Divider, Grid, Pagination } from '@mui/material';
import UniversityListCard from './universityListCard';
import fakeUniData from '../data/fakeUni';
import Filter from './filter';
import UniversityListTable from './universityListList';

const UniversityList = () => {
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);
  const [numberOfPages] = useState(
    Math.ceil(fakeUniData.length / itemsPerPage)
  );

  const [isGridView, setIsGridView] = useState(false);

  const handleGridView = () => {
    setIsGridView(true);
  };

  const handleListView = () => {
    setIsGridView(false);
  };

  const currentCards = fakeUniData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <div className="app-content-header">
              <h1 className="app-content-headerText">List Of Universities</h1>
            </div>
            <div className="app-content-actions">
              <input
                className="form-control search-bar"
                placeholder="Search..."
                type="text"
              />
              <div className="app-content-actions-wrapper">
                <Filter />
                <button
                  className={`btn action-button ${!isGridView ? 'active' : ''}`}
                  title="List View"
                  onClick={handleListView}
                >
                  List View
                </button>
                <button
                  className={`btn action-button ${isGridView ? 'active' : ''}`}
                  title="Grid View"
                  onClick={handleGridView}
                >
                  Grid View
                </button>
              </div>
            </div>
            {isGridView ? (
              <UniversityListCard />
            ) : (
              <UniversityListTable/>
            )}
          </div>
        </div>
        <Grid container justifyContent="center" style={{ marginBottom: 20 }}>
          <Grid item>
            <Divider />
            <Box component="span">
              <Pagination
                count={numberOfPages}
                page={page}
                onChange={handleChange}
                defaultPage={1}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
              />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UniversityList;
