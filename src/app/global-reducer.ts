import { combineReducers } from "redux";
import storageModuleReducer from "../modules/redux-saga-storage/reducers";

const netPlannerReducer = combineReducers({
  storageReducer: storageModuleReducer,
});

export default netPlannerReducer;
