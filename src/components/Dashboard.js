import React from 'react';
import ApiService from '../ApiService';

const Dashboard = () => {

  ApiService.getCompanyData(true);

  return(
    <div>
      <h2>empty dashboard</h2>
    </div>
  );
}
export default Dashboard;