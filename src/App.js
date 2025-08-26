import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Dashboard from './Screens/Dashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/Dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
