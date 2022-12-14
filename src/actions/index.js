import requestAPI from '../API/requestAPI';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const FINAL_EDIT = 'FINAL_EDIT';
export const ADD_EDIT = 'ADD_EDIT';
const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
const REQUEST_EXPENSES = 'REQUEST_EXPENSES';

export const receiveUser = (email) => ({
  type: RECEIVE_USER,
  email,
});
const requestExpenses = () => ({
  type: REQUEST_EXPENSES,
});
const receiveExpenses = (data, expenses) => ({
  type: RECEIVE_EXPENSES,
  expenses,
  data: { exchangeRates: data },
});
export const fetchExpenses = (expenses) => async (dispatch) => {
  dispatch(requestExpenses());
  return requestAPI()
    .then(
      (data) => dispatch(receiveExpenses(data, expenses)),
    );
};
const requestCurrency = () => ({ type: REQUEST_CURRENCY });
const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY,
  currency,
});
export const fetchCurrencyAPI = () => async (dispatch) => {
  dispatch(requestCurrency());
  return requestAPI()
    .then(
      (data) => dispatch(receiveCurrency(data)),
    );
};

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const editExpense = (data) => ({
  type: EDIT_EXPENSE,
  data,
});

export const finalEdit = () => ({ type: 'FINAL_EDIT' });

export const addEdit = (data) => ({
  type: ADD_EDIT,
  data,
});
