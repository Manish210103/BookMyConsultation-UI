import React, { useState } from "react";
import "./Header.css"; // Assuming you have a CSS file for styling
import LoginModal from "../../screens/login/Login";
import RegisterModal from "../../screens/register/Register";
import logo from '../../assets/logo.jpeg';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const handleModalClose = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  return (
    <div className="header-header">
      <div className="header-toolbar">
        <div className="header-logo">
          <img src={logo} alt="Logo" /> 
          <span className="header-logo-text">Doctor Finder</span>
        </div>
        <div className="header-login-logout">
          <button className="header-login-button" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
      {(isLoginModalOpen || isRegisterModalOpen) && (
        <div className="header-modal">
          <div className="header-modal-content">
            <div className="header-auth-container">
              <div className="header-auth-header">
                <h5>Authentication</h5>
              </div>
              <div className="header-auth-options">
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleRegisterClick}>Register</button>
              </div>
            </div>
            {isLoginModalOpen && <LoginModal onClose={handleModalClose} />}
            {isRegisterModalOpen && <RegisterModal onClose={handleModalClose} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
