import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/login',
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log(response.data);
      alert('Login successful!');
      navigate('/dashboard'); // Redirect after success
    } catch (error) {
      if (error.response) {
        console.error(error.response.data);
        alert('Login failed: ' + error.response.data.detail);
      } else {
        console.error(error);
      }
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type='text'
            placeholder='Enter Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='submit'>Login</button>
          <button type='button' onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
