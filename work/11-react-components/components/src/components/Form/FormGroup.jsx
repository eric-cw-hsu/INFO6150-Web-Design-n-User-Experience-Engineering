import React, { useContext, useState } from 'react';
import './FormGroup.css';
import { errorIcon } from '../../lib/IconDictionary';
import { ThemeContext } from '../../lib/ThemeProvider';


const FormGroup = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  errors,
  setErrors
}) => {

  const { theme } = useContext(ThemeContext);

  const validate = (e) => {
    if (required && e.target.value === '') {
      setErrors({ ...errors, [name]: `${label} is required` });
      return
    }

    if (type == 'email' && RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(e.target.value) === false) {
      setErrors({ ...errors, [name]: 'Please enter a valid email address' });
      return
    }

    setErrors({ ...errors, [name]: null });
  }

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  const handleOnBlur = (e) => {
    validate(e);
  }

  return (
    <div className="form-control">
      <div className="form-label-container">
        <label
          className={`form-label form-label--${theme}`}
          htmlFor={name}
        ><span className='required-asterisk'>*</span>{label}</label>
      </div>
      <div
        className={`form-input-container form-input-container--${theme}`}>
        {(type === 'textarea')
          ? <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            onBlur={handleOnBlur}
          />
          : <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            onBlur={handleOnBlur}
          />
        }
      </div>

      {errors[name] && (
        <>
          <div></div>
          <div className="form-error">
            <div className="form-error__icon">{errorIcon}</div>
            <p className="form-error__message">{errors[name]}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default FormGroup;
