import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions'

// export function createCourse(course) {
//   return {type: types.CREATE_COURSE, course}
// }

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS,courses}
}
export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS,course}
}
export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS,course}
}

export function loadCourses () {
  return function(dispatch) {
    // console.log(dispatch);
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses=>{
      dispatch(loadCoursesSuccess(courses));
    }).catch(err=>{
      throw err;
    });
  };
}
export function saveCourse (course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course=>{
      console.log("from saveCourses action",course.id);
      course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
    }).catch(err=>{
      throw err;
    });
  };
}