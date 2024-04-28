const SelectInput = ({
  name,
  onChange,
  renderOption,
  options,
  id,
  placeholder,
}: any) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor={id}>
          {placeholder}
        </label>
      </div>
      <select name={name} onChange={onChange} className="custom-select" id={id}>
        {options.map((option: any) => renderOption?.(option))}
      </select>
    </div>
  );
};

export default SelectInput;
