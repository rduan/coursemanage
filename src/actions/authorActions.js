import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  // console.log("in loadAuthorsSuccess", authors)
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};

}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors=>{
      // console.log(authors);
      dispatch(loadAuthorsSuccess(authors));
    }).catch(err=>{
      throw(err);
    });
  };
}
