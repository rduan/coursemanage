import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

describe('Course Actions', ()=>{
  describe('create course success', () => {
    it('should create a action',() => {
      const course={id:'clean-code', title:'clean code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course
      };

      const action = courseActions.createCourseSuccess(course);
      expect(action).toEqual(expectedAction);
      
    }
    )
    
  }
  )
})
