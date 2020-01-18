import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import playerReducer from './playerReducer';

const rootReducer = combineReducers({
    mainReducer,
    playerReducer
  });

export default rootReducer;