const Input = ({ value, onChange }) => {
  return (
    <input className="input" type="text" value={value} onChange={onChange} />
  );
};

export default Input;
