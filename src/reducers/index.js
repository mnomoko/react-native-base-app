import { combineReducers } from "redux";
import DataReducer from './data';

const rootReducer = combineReducers({
  data: DataReducer
});

export default rootReducer;
