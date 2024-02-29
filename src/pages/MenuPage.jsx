// MenuMakanan.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuPage = () => {
  // Data menu makanan (contoh)
  const menuItems = [
    { id: 6, nama: 'nasi goreng', harga: 5000, gambar: '/src/assets/img/nasgor.png' },
    { id: 2, nama: 'kebab', harga: 8000, gambar: '/src/assets/img/kebab.png' },
    { id: 2, nama: 'burger', harga: 5000, gambar: '/src/assets/img/burger.png' },
    { id: 2, nama: 'pisang coklat', harga: 1000, gambar: '/src/assets/img/piscok.png' },
    { id: 2, nama: 'lumpia basah', harga: 8000, gambar: '/src/assets/img/lumbas.png' },
    // Tambahkan item menu lainnya
  ];

  return (
    <header className="w-100 min-vh-100">
    <div className="menu-container">
      <h1>
          <div className="mb-4">
          
          <span className="split-text">Menu</span>
          <span className="split-text5"> bestseller</span>
         </div>
          </h1>
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.gambar} alt={item.nama} />
          <div className="menu-details">
            <h3>{item.nama}</h3>
            <p>Rp {item.harga}</p>
            <NavLink to="/payment">
            <button className="add-to-cart-button">Beli</button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
    </header>
  );
};

export default MenuPage;