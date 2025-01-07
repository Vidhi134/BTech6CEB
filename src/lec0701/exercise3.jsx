import { useState } from "react";


const ToggleText = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter text" 
        value={text} 
        onChange={handleChange} 
      />
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Txt' : 'Show Txt'}
      </button>
      {isVisible && <p>{text}</p>}
    </div>
  );
};

export default ToggleText;
