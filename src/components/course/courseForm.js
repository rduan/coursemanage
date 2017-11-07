import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors,onSave,onChange,loading,errors})=>{
  // error={errors.title}
  // error={errors.authorId}
  // error={errors.category} 
  // error={errors.title} 
  // console.log('====================================');
  // console.log(allAuthors);
  // console.log(course);
  // console.log('====================================');
  
  return (
    <form>
      <h1>Mnage course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
         />

      <SelectInput
        name="authorid"
        label="Author"
        value={course.authorId}
        defaultOption="select author"
        options={allAuthors}
        onChange={onChange}
         />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        />

        <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        />

      <input 
        type="submit"
        disabled={loading}
        value={loading? 'Saving...': 'Save'}
        className="btn btn-primary"
        onClick={onSave} />

    </form>
  )
}

CourseForm.propTypes = {
  allAuthors:PropTypes.array.isRequired
  
};

export default CourseForm;