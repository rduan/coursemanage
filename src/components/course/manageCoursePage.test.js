import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './manageCoursePage';

describe('Manage Course Page',()=>{

  it('sets error message when trying to save empty title',()=>{
    const props = {
      authors: [],
      course : {id:'',watchHref:'',title:'',authorId:'',length:'',category:''},
      actions: {saveCourse: ()=>{return Promise.resolve();}},
      errors: {}
    };
    
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveBtn = wrapper.find('input').last();
    expect(saveBtn.prop('type')).toBe('submit');
    saveBtn.simulate('click');
    expect(wrapper.state().errors.title).toBe('title must be at least 5 characters');

  });
});