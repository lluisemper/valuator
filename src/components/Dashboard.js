import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Dashboard = () => {

  return(
    <div className="dashboard">
      <section className="container">
        <h4>~It's only when the tide goes out that you discover who's been swimming naked.</h4>
        <div className="link-dashboard">
          <Link to="/valuate" className="link-text">
            Start Learning!
          </Link>
        </div>
      </section>
      
    </div>
  );
}
export default Dashboard;