import React, {useContext} from 'react';
import ApiService from '../ApiService';
import { DataCompanyContext } from '../App';

const CompanyToValuate = () => {

  const dataCompanyContext = useContext(DataCompanyContext)

  const companySearch = () => {
    ApiService.getCompanyData('BABA').then(response => {
      console.log(response);
      dataCompanyContext.dataCompanyDispatch({ type: 'FETCH_SUCCESS', payload: response })
    })
    .catch(error => {
      dataCompanyContext.dataCompanyDispatch({ type: 'FETCH_ERROR' })
    })
  }
  
  return(
    <div>
      <p>fooo</p>
      <button className="search-button" type="submit"
                  onClick={() => companySearch()}>Search</button>
    </div>
  );
}
export default CompanyToValuate;