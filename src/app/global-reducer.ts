import { combineReducers } from 'redux';
import storageModuleReducer from '../modules/storage/reducers';

const netPlannerReducer = combineReducers({
    storageReducer: storageModuleReducer
});

export default netPlannerReducer;
