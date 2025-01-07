// Create a react pure functional component that will take 2 number and print addition,subtraction, multiplication and divsion

import { useState } from "react";
function Addition() {
    const [a, seta] = useState(0); // First number
    const [b, setb] = useState(0); // Second number
  

        return (
            <div>
                <label>
        Number 1:
        <input
          type="number"
          value={a}
          onChange={(e) => seta(parseFloat(e.target.value) || 0)}
        />
      </label>
      <br />
      <label>
        Number 2:
        <input
          type="number"
          value={b}
          onChange={(e) => setb (parseFloat(e.target.value) || 0)}
        />
      </label>
      
                <div> <p>Addition: {a + b}</p> 
                <p>Subtraction: {a - b}</p> 
                <p>Multiplication: {a * b}</p>
                 <p>Division: {a !== 0 ? a / b : 'Cannot divide by zero'}</p> </div>
                </div>
        )
}

export default Addition;