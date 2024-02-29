import React from 'react';
import burger1image from "../assets/img/about.png";

function AboutPage() {
  return (
    <header className="w-100 min-vh-100">
      <div className="about-container">
        <div className="about-text">
          <h1 className="mb-4">
            <span className="color3">Kedai</span>
            <span className="color4"> Katresna</span>
          </h1>
          <p style={{ textAlign: 'justify' }}>
            kedai katresna adalah kedai yang berdiri sejak <br /> 2023. Kedai ini menyediakan berbagai macam <br /> makanan dari mulai harga termurah sampai <br /> termahal.
          </p>
        </div>
        <div className="about-image">
          <img src={burger1image} alt="pplg-img" />
        </div>
      </div>
    </header>
  );
}

export default AboutPage;
