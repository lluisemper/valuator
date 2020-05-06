import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CompanyToValuate from './components/CompanyToValuate';
import ConclusionValuation from './components/ConclusionValuation';
import { reducer, initialState } from './reducers/fetchReducer';

export const DataCompanyContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return(
    <DataCompanyContext.Provider
			value={{ dataCompanySate: state, dataCompanyDispatch: dispatch }}>
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/valuate" component={CompanyToValuate} />
            <Route path="/valuate/results" component={ConclusionValuation} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </DataCompanyContext.Provider>
  );
}

export default App;

