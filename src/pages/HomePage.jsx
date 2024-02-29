import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import nasgor1image from "../assets/img/nasgor1.png";
import "../dist/css/main.css"; // Import your CSS file
import burger1image from "../assets/img/about.png"
import NavbarComponent from "../components/NavbarComponent";

const HomePage = () => {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleMasukClick = () => {
    setShowNotification(true);
  };

  const handleYaClick = () => {
    setShowNotification(false);
    navigate("/Daftar"); // Use navigate to go to the login page
  };

  const handleTidakClick = () => {
    setShowNotification(false);
    navigate("/Login");
    // Handle logic if "Tidak" button is clicked
  };

  return (
    <>

    <div className="homepage">
      
      <header className="w-100 min-vh-100 d-flex align-items-center banner1">
        <div className="container">
          <div className="header-box d-flex align-items-center">
            <div className="col-lg-6">
            <h1 >
          <span class="color1">Selamat</span>
          <span class="color2"> Datang</span>
          </h1>
              <span1>Di Kedai Katresna rasakan sensasi</span1> <br />
              <span2>makanan terbaik kami.</span2>
              <p className="mb-4"></p>
              <button className="button5" onClick={handleMasukClick}>
                Masuk
              </button>
            </div>
            <div className="col-lg-6 pt-lg-0-5 d-flex justify-content-center">
              <img src={nasgor1image} alt="nasgor1-img"  className="nasgor"/>
            </div>
          </div>
        </div>
      </header>

      {/* Notification */}
      {showNotification && (
        <div className="notification">
          <p>Apakah sudah punya akun?</p>
          <div className="button-container2">
            <button onClick={handleTidakClick}>YES</button>
            <button onClick={handleYaClick}>NO</button>
          </div>
        </div>
      )}

<header className="w-100 min-vh-100">
    <div className="about-container">
      <div className="about-text">
        <h1 className="mb-4">
        <span class="color3">Kedai</span>
          <span class="color4"> Katresna</span>
        </h1>
        <p>
        kedai katresna adalah kedai yang berdiri sejak <br /> 2023. Kedai ini menyediakan berbagai macam <br /> makanan dari mulai harga termurah sampai <br />termahal.
        </p>
      </div>
      <div className="about-image">
      <img src={burger1image} alt="pplg-img" />
      </div>
    </div>
    </header>
    </div>
    </>
  );
};

export default HomePage;
