import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {mount, shallow} from 'enzyme';
import CourseForm from './courseForm';

function setup(saving) {
  let props ={
    course: {},
    saving,
    error: {}, 
    onSave:  () => {},
    onChange: ()=>{}

  };

  return shallow(<CourseForm {...props} />);
}


describe('CourseForm via Enzyme u',()=>{

  
  it('renders form', ()=>{
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage course');
  });

  it('save button is labeled Save when not saving', ()=>{
    const wrapper = setup(false);
    // props()
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled Saving when saving', ()=>{
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });


});
describe('CourseForm via ',()=>{

});