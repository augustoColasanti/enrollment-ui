import "../assets/scss/Input.scss";

export const Input = ({
  type,
  name,
  value,
  onChange,
  touched,
  valid,
  testId,
}) => {
  return (
    <input
      id="input"
      type={type}
      name={name}
      value={value}
      className={touched && !valid ? "invalid-input" : ""}
      onChange={onChange}
      data-testid={testId}
    />
  );
};
