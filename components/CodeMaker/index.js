import React, {useState} from 'react';


const CodeInput = ({codes, selected, onChange}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <select onChange={handleChange} value={selected}>
      {codes.map((code) => (
        <option
          value={code}
          key={code}>
          {code}
        </option>)
      )}
    </select>);
  };

const CodeMaker = ({
  size,
  codes,
  onCodeSubmit,
}) => {

  const [selectedCodes, setSelectedCodes] = useState(new Array(size).fill('0'));

  const handleSubmit = () => {
    onCodeSubmit(selectedCodes);
  }

  const handleCodeInput = (index, value) => {
    const nextState = Array.from(selectedCodes);
    nextState[index] = value;
    setSelectedCodes(nextState);
  }

  const renderInputs = () => {
    const inputs = selectedCodes.map((code, index) => (
      <CodeInput
        codes={codes}
        key={index}
        selected={code}
        onChange={(value) => handleCodeInput(index, value)} />
    ));

    return inputs;
  };

  return (
    <div>
      {renderInputs()}
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default CodeMaker;
