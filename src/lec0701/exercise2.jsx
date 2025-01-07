import { useState } from "react";
const EmailValidator = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    // Regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(emailInput));
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      {isValid !== null && (
        <p>{isValid ? 'Valid email address' : 'Invalid email address'}</p>
      )}
    </div>
  );
};

export default EmailValidator;
