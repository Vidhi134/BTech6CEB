// create a registration form with the following details 
// 1. Cricketer name (Text Box) -- Minimum 8 characters 
// 2. gender (Radio button)
// 3. Email (Text Box) -- Minimum format validation
// 4. Matches (Checkbox) -- ODI, TEST, T20,DOMESTIC
// 5. Password and Confirm Password -- both should be same
// 6. Country (Dropdown)
// 7. Save Button 
// when  user click on save button all above details should be displayed below form in table format

import  { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    matches: [],
    password: '',
    confirmPassword: '',
    country: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        matches: checked
          ? [...prev.matches, value]
          : prev.matches.filter((match) => match !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (formData.name.length < 8) newErrors.name = 'Name must be at least 8 characters long.';
    if (!formData.email.includes('@')) newErrors.email = 'Email must include @.';
    if (formData.password !== formData.confirmPassword) newErrors.password = 'Passwords must match.';
    if (!formData.gender) newErrors.gender = 'Gender is required.';
    if (!formData.country) newErrors.country = 'Country is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmittedData(formData);
      setFormData({
        name: '',
        gender: '',
        email: '',
        matches: [],
        password: '',
        confirmPassword: '',
        country: '',
      });
    }
  };

  return (
    <div>
      <h1>Cricketer Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cricketer Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
          {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label>Matches:</label>
          <label>
            <input
              type="checkbox"
              name="matches"
              value="ODI"
              checked={formData.matches.includes('ODI')}
              onChange={handleChange}
            />
            ODI
          </label>
          <label>
            <input
              type="checkbox"
              name="matches"
              value="TEST"
              checked={formData.matches.includes('TEST')}
              onChange={handleChange}
            />
            TEST
          </label>
          <label>
            <input
              type="checkbox"
              name="matches"
              value="T20"
              checked={formData.matches.includes('T20')}
              onChange={handleChange}
            />
            T20
          </label>
          <label>
            <input
              type="checkbox"
              name="matches"
              value="DOMESTIC"
              checked={formData.matches.includes('DOMESTIC')}
              onChange={handleChange}
            />
            DOMESTIC
          </label>
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <div>
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="England">England</option>
            <option value="South Africa">South Africa</option>
          </select>
          {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
        </div>

        <button type="submit">Save</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Matches</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.name}</td>
                <td>{submittedData.gender}</td>
                <td>{submittedData.email}</td>
                <td>{submittedData.matches.join(', ')}</td>
                <td>{submittedData.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
