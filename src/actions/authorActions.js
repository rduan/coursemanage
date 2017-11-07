import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorsSuccess(authors) {
  // console.log("in loadAuthorsSuccess", authors)
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};

}

export function loadAuthors() {
  return function(dispatch) {
    return AuthorApi.getAllAuthors().then(authors=>{
      // console.log(authors);
      dispatch(loadAuthorsSuccess(authors));
    }).catch(err=>{
      throw(err);
    });
  };
}
