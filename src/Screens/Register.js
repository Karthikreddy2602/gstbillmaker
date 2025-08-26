import React, { useState } from 'react';
import '../Styles/Register.css';

function Register() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    gmail: '',
    phone: '',
    gender: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className='login-container'>
      <div className='form-card'>
        <h2 className='title'>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            name='username'
            placeholder='Username'
            onChange={handleChange}
            required
          />
          <input
            className='input'
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
            required
          />
          <input
            className='input'
            type='email'
            name='gmail'
            placeholder='Email'
            onChange={handleChange}
            required
          />
          <input
            className='input'
            type='text'
            name='phone'
            placeholder='Phone Number'
            onChange={handleChange}
            required
          />
          <input
            className='input'
            type='text'
            name='gender'
            placeholder='Gender (Optional)'
            onChange={handleChange}
          />
          <button className='button' type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
