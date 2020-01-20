import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import playerReducer from './playerReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    mainReducer,
    playerReducer,
    searchReducer
  });

export default rootReducer;