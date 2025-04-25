const Radio = ({ name, value, checked, onChange }) => {
  return (
    <input
      className="radio"
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Radio;
