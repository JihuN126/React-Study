function Button({ onClick, label }) {
  return <button onClick={onClick} style={{ margin: '10px' }}>{label}</button>;
}

export default Button;
