import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import { NAME } from './const.js';
import reducer from './reducers/reducer';

/*
 *
 *  下面两种情况是一样滴
 *
 */
// case1:
// const middleware = applyMiddleware(thunk);
// export default (data = {}) => {
//   const rootReducer = combineReducers({
//     [NAME]: reducer,
//   });
//   return createStore(rootReducer, data, middleware);
// }

// case2
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export default (data = {}) => {
  const rootReducer = combineReducers({
    [NAME]: reducer,
  });
  return createStoreWithMiddleware(rootReducer, data);
}
