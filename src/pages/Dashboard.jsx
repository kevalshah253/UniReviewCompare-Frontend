import React, { useState } from 'react';
import '../css/dash.scss';
import Sidebar from '../components/sidebar';
import UniversityList from '../components/universityList';
import Profile from './Profile';
import { ThemeProvider, createTheme } from '@mui/material';
import RateAndReview from './RateAndReview';
import QuestionCards from '../components/Questions';


const Dashboard = () => {
  const theme = createTheme();
  const [activeItem, setActiveItem] = useState('Universities');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  // Function to render component based on activeItem state
  const renderComponent = () => {
    switch (activeItem) {
      case 'Universities':
        return <UniversityList />;
      case 'Rate and Review':
        return <QuestionCards/>;
      case 'Compare':
        return <RateAndReview />;
      case 'Rate and Review':
        return <ThemeProvider theme={theme}><Profile /></ThemeProvider>;
      case 'Profile':
        return <Profile />;
      default:
        return null;
    }
  };
  return (
    <div className='outer'>
      <div className='inner'>
      <div className="app-container">
      <Sidebar onItemClick={handleItemClick}/>
      <div className="app-content">
        {renderComponent()}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Dashboard;
