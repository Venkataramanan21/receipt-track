import React from 'react';

const PriceInput = ({
  name,
  type,
  onChange,
  value,
  placeholder,
}: any): React.JSX.Element => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          ₹
        </span>
      </div>
      <input
        name={name}
        step="0.01"
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

export default PriceInput;
