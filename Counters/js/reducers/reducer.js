import { handleActions } from 'redux-actions';
import {
  INCREMENT,
  DECREMENT,
  ADD_NEW_COUNTER,
} from '../actions/actionTypes';

const initialState = {
  idGen: 0,
  counters: {},
};

export default handleActions({
  /*
   *
   * [keyVar]: value, 这种是ES6的新语法，可以已变量的值作为key，就用[]括起来
   *
   */
  [ADD_NEW_COUNTER]: (state, action) => {
    const { idGen } = state;
    const newId = idGen + 1;
    return {
      idGen: newId,
      counters: {
        ...state.counters,
        [newId]: 0,
      }
    }
  },
  [INCREMENT]: (state, action) => {
    const { payload: { id } } = action;
    return {
      ...state,
      counters: {
        ...state.counters,
        [id]: state.counters[id]+1,
      }
    }
  },
  [DECREMENT]: (state, action) => {
    const { payload: { id }} = action;
    return {
      ...state,
      counters: {
        ...state.counters,
        [id]: state.counters[id]-1,
      }
    }
  },
}, initialState);
