function AuthInput({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  action,
}) {
  return (
    <div className="form-group">
      <div className="label-row">
        <label htmlFor={id}>{label}</label>

        {action}
      </div>

      <div className="input-wrapper">
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={error ? "input-error" : ""}
        />
      </div>

      {error && (
        <p className="field-error">{error}</p>
      )}
    </div>
  );
}

export default AuthInput;