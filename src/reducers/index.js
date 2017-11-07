import {combineReducers} from 'redux';
import coursesReducer from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


/**
 *  can not use coursesReducer, because combineReducers will return a single state object
 *  be carefule
 */

const rootReducer = combineReducers({
  courses: coursesReducer,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;