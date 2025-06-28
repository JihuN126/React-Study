function TextInput({ value, onChange, placeholder, multiline }) {
  if (multiline) {
    return <textarea value={value} onChange={onChange} placeholder={placeholder} rows={4} style={{ width: '100%', marginBottom: '10px' }} />;
  }
  return <input type="text" value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', marginBottom: '10px' }} />;
}

export default TextInput;
