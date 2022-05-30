// Esse reducer será responsável por tratar as informações da pessoa usuária
import { RECEIVE_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_USER:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}
