import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';

import qrCode from './assets/app/qrcode.png';
import loan from './assets/app/loan.png';
import money from './assets/app/money.png';
import mod from './assets/app/mod.png';
import gps from './assets/app/gps.png';
import clap from './assets/app/clap.png';
import alldoc from './assets/app/alldoc.png';

import PolicyPage from './PolicyPage';

// Header component
function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Zerog Apps Logo" className="logo-img" />
                <span className="studio-name">Zerog Apps Studio</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <a href="#about" className="nav-link">ABOUT US</a>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

// Trang chính
function HomePage() {
  const games = [
    {
      name: 'EMI Loan',
      image: loan,
      link: 'https://play.google.com/store/apps/details?id=com.loantool.finance.calculator.autoloan.emicalculator.loan.financialcalculator'
    },
    {
      name: 'Money Manager',
      image: money,
      link: 'https://play.google.com/store/apps/details?id=com.financialplanning.incomtracker.moneytracker.personalfinance.budgetplan.financial'
    },
    {
      name: 'Mod for Minecraft',
      image: mod,
      link: 'https://play.google.com/store/apps/details?id=com.mcpecenter.mods.forminecraftpe.mcpeaddons'
    },
    {
      name: 'QR Code Scanner',
      image: qrCode,
      link: 'https://play.google.com/store/apps/details?id=com.qrcode.barcodereader.qrcodescanner.barcodescan.qrcreator'
    },
    {
      name: 'Clap Finder',
      image: clap,
      link: 'https://play.google.com/store/apps/details?id=com.finder.clap.findphone.whistle.byclapping'
    },
    {
      name: 'GPS Camera',
      image: gps,
      link: 'https://play.google.com/store/apps/details?id=com.gps.camera.gpsmapcamera.geotagphoto.timestamp'
    },
    {
      name: 'Doc Reader',
      image: alldoc,
      link: 'https://play.google.com/store/apps/details?id=com.alldocumentreader.office.viewer.filereader'
    }
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Welcome to Zerog Apps Studio</h2>
            <p className="about-text">
              Zerog Apps Studio is a mobile app development studio dedicated to creating innovative, high-quality, and user-friendly applications.
              Our official website serves as a showcase for all the apps developed by Zerog – from casual games and productivity tools to educational and lifestyle apps.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="game-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:
            <a href="mailto:contact@mkjgame.net"> bounouardriss.ad@gmail.com</a>
          </p>
        </div>
      </section>
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Zerog Apps Studio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
