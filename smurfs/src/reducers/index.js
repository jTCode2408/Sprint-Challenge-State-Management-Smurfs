//import both reducers here
//root reducer
import { combineReducers } from 'redux';
import {formReducer} from './formReducer';
import { smurfReducer } from './smurfReducer';

export default combineReducers({
    formReducer,
    smurfReducer
});