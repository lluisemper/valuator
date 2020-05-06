import React, { useState }  from 'react';
import { companySearch } from '../ApiServiceCalls';
import {useContext} from 'react';
import { DataCompanyContext } from '../App';


const CompanyToValuate = () => {

  const [symbol, setSymbol] = useState('')
  const dataCompanyContext = useContext(DataCompanyContext);

  return(
    <div>
      <p>fooo</p>
      <input type="text" onChange={(e) => setSymbol(e.target.value)}/>
      <button className="search-button" type="submit"
                  onClick={() => companySearch(symbol, dataCompanyContext)}>Search</button>
    </div>
  );
}
export default CompanyToValuate;