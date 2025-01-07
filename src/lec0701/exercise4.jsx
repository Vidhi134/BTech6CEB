//    4. Create a react pure functional component that will take text input and print total number of characters.

import { useState } from "react";
const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter text" 
        value={text} 
        onChange={handleChange} 
      />
      <p>Total number of characters: {text.length}</p>
    </div>
  );
};

export default CharacterCounter;
