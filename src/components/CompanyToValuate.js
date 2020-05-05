import React from 'react';
import ApiService from '../ApiService';

const CompanyToValuate = () => {

  const companySearch = () => {
    ApiService.getCompanyData('BABA').then(data => console.log("data", data) || data)
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