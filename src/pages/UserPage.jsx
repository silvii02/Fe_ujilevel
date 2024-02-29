import React, { useState } from 'react';

const UserPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logika untuk memproses login berdasarkan email dan password
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};

export default UserPage;
