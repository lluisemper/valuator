import ApiService from './ApiService';


export const companySearch = (symbol, dataCompanyContext) => {
  ApiService.getCompanyData(symbol).then(response => {
    console.log(response);
    dataCompanyContext.dataCompanyDispatch({ type: 'FETCH_SUCCESS', payload: response })
  })
  .catch(error => {
    dataCompanyContext.dataCompanyDispatch({ type: 'FETCH_ERROR' })
  })
}