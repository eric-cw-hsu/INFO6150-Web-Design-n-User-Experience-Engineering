import React from 'react';
import './FormGroup.css';

const RequiredHintField = () => {
  return (
    <div className="form-control">
      <div></div>
      <div className="required-hint-container">
        <p><span className='required-asterisk'>*</span> indicates a required field</p>
      </div>

    </div>
  );
}

export default RequiredHintField;
