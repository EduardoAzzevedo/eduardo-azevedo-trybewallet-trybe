import API from '../API/API';

export const USER_EMAIL = 'USER_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVED_CURRENCIES = 'RECEIVED_CURRENCIES';

export const recivedUser = (payload) => ({
  type: USER_EMAIL,
  payload,
});

// const currenciesAPI = (payload) => ({
//   type: 'API_CURRENCIES', payload,
// });

const requestCurrency = () => ({ type: REQUEST_CURRENCIES });

const receiveCurrency = (currency) => ({
  type: RECEIVED_CURRENCIES,
  currency,
});

const fetchCurrenciesAPI = () => (dispatch) => {
  dispatch(requestCurrency());
  return API()
    .then(
      (data) => dispatch(receiveCurrency(data)),
    );
};

export default fetchCurrenciesAPI;
