// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES, RECEIVED_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      loading: true,
    };
  case RECEIVED_CURRENCIES:
    return {
      ...state,
      loading: false,
      currencies: Object.keys(action.currency).filter((c) => c !== 'USDT'),
    };
  default:
    return state;
  }
}
