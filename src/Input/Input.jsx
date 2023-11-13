import React from 'react';
import './Input.scss';

const Input = ({ label, value, type, setValue }) => {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </label>
  );
};

export default Input;
