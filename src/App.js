import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Valuation from './components/Valuation';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/valuate" component={Valuation} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
  </BrowserRouter>
  );
}

export default App;
