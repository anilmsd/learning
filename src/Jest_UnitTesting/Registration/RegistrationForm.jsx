// RegistrationForm.js
import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    interests: [],
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., make an API call, etc.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <div>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="reading">Reading</label>
        <input
          type="checkbox"
          id="reading"
          name="interests"
          value="reading"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="sports">Sports</label>
        <input
          type="checkbox"
          id="sports"
          name="interests"
          value="sports"
          onChange={handleChange}
        />
      </div>

      <label htmlFor="country">Country:</label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="India">India</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
