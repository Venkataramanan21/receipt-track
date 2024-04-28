const TextArea = ({ name, onChange, placeholder, value }: any) => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">{placeholder}</span>
      </div>
      <textarea
        className="form-control"
        aria-label="placeholder"
        name={name}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
