import React, {PropTypes} from 'react';

const SelectInput = ({name, label,onChange, defaultOption, value, error, options}) => {
  // console.log('from select,',options);
  console.log('select value: ',value);
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control">
          <option value="">{defaultOption}</option> 
          {options.map((option)=>{
            return <option key={option.value} value={option.value}>{option.text}</option>
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
    
  );
}

SelectInput.propTypes = {
  options:PropTypes.array
};
export default SelectInput;