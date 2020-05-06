const APP_KEY = process.env.REACT_APP_KEY;

export default {

  getCompanyData: (search) => {
    return fetchCompanyData(search, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": APP_KEY
      }
    });
  }
}

const fetchCompanyData = (search, options) => {
  const URL_API = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis?symbol=${search}`
  return fetch(`${URL_API}`, options)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.status === 200 ? res.json() : res)
    .catch((err) => {
      console.log(`${err.message} while fetching /${URL_API}`)
    });
}