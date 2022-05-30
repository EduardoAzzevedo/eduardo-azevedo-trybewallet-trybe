// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCY, RECEIVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCY:
    return {
      ...state,
      currencies: Object.keys(action.currency).filter((currency) => currency !== 'USDT'),
    };
  case RECEIVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, Object.assign(action.expenses, action.data)],
    };
    default:
      return state;
  }
}
