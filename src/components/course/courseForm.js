import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors,onSave,onChange,saving,errors})=>{
  
  console.log(errors.title)
  return (
    <form>
      <h1>Manage course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
         />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="select author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}
         />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} 
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
