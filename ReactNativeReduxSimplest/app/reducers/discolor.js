/*
 *
 *  项目里唯一的reducer
 *
 */

import * as types from '../actions/actionTypes';

const initialState = {
  color: 'red',
};

export default function discolor(state = initialState, action = {}) {
  console.log('----');
  switch (action.type) {
    case types.CHANGE2RED:
      return {
        ...state,
        color: 'red',
      };
    case types.CHANGE2GREEN:
      return {
        ...state,
        color: 'green',
      };
    default:
      return state;
  }
}
