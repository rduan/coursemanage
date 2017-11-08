import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors,onSave,onChange,saving,errors})=>{
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
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
         />

      <SelectInput
        name="authorId"
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
        disabled={saving}
        value={saving? 'Saving...': 'Save'}
        className="btn btn-primary"
        onClick={onSave} />

    </form>
  )
}

CourseForm.propTypes = {
  allAuthors:PropTypes.array.isRequired
  
};

export default CourseForm;
