import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './courseForm';

function setup(saving) {
  let props ={
    course: {},
    saving,
    error: {}, 
    onSave:  () => {},
    onChange: ()=>{}

  };

  let render = TestUtils.createRenderer();
  render.render(<CourseForm {...props} />);
  let output = render.getRenderOutput();

  return {
    props,
    output,
    render
  }
}


describe('CourseForm via React Test Util d',()=>{

  
  it('renders form', ()=>{
    const {output} = setup();
    expect(output.type).toBe('form');
    // console.log(output.props)
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled Save when not saving', ()=>{
    const {output} = setup(false);
    const submitBtn = output.props.children[5];
    // console.log(submitBtn.props);
    expect(submitBtn.props.value).toBe('Save');
  });

  it('save button is labeled Save when not saving', ()=>{
    const {output} = setup(true);
    const submitBtn = output.props.children[5];
    // console.log(submitBtn.props);
    expect(submitBtn.props.value).toBe('Saving...');
  });


});
describe('CourseForm via ',()=>{

});