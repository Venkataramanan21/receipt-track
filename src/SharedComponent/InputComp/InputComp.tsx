import React from 'react';

const InputComp = ({
  name,
  type,
  onChange,
  value,
  placeholder,
}: any): React.JSX.Element => {
  return (
    <div className="input-group mb-3">
      <input
        name={name}
        type={type}
        className="form-control"
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby="basic-addon1"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComp;
