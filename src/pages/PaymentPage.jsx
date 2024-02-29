// src/Login.js
import React, { useState } from 'react';
import gopay from "../assets/img/gopay.png"


const PaymentPage = () => {
  const [username, setUsername] = useState('');
  const [username1, setUsername1] = useState('');
  const [username2, setUsername2] = useState('');
  const [username3, setUsername3] = useState('');

  const handleLogin = () => {
    // Tempatkan logika autentikasi di sini (misalnya, panggil API login)

    // Contoh sederhana: Validasi username dan password
    if (username === 'user' && password === 'password') {
      alert('Login berhasil!');
    } else {
      alert('Login gagal. Periksa kembali username dan password.');
    }
  };

  return (
    <div className="payment-container">
      <form className="payment-form">
        <img src={gopay} />
        <label>
          <input
            className="payment-input"
            type="text" placeholder="Gopay"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
         <label>
          <input
            className="payment-input"
            type="text" placeholder="Ovo"
            value={username1}
            onChange={(e) => setUsername1(e.target.value)}
          />
        </label>
        <label>
          <input
            className="payment-input"
            type="text" placeholder="Dana"
            value={username2}
            onChange={(e) => setUsername2(e.target.value)}
          />
        </label>
        <label>
          <input
            className="payment-input"
            type="text" placeholder="Cash"
            value={username3}
            onChange={(e) => setUsername3(e.target.value)}
          />
        </label>
        <button className="login-button" type="button" onClick={handleLogin}>
          Bayar
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;