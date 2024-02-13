// LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Validate login credentials
    const student = api.find((course) =>
      course.students.find((s) => s.email === email && s.password === password)
    );

    if (student) {
      // Successful login, navigate to the Student Dashboard
      navigate('/dashboard');
    } else {
      // Invalid credentials, handle accordingly (show error message, etc.)
      alert('Invalid login credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
