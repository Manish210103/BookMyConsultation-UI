import React, { useState } from "react";
import "./login.css";

const LoginTab = ({ onLogin, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    if (email.trim() === "") {
      setEmailError("Please fill out this field");
    }
    if (password.trim() === "") {
      setPasswordError("Please fill out this field");
    }

    if (email.trim() !== "" && !validateEmail(email)) {
      setEmailError("Enter a valid email");
    }

    if (email.trim() !== "" && password.trim() !== "" && validateEmail(email)) {
      try {
        const response = await fetch("http://localhost:8080/users/test123@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        });

        console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      const data = await response.json();
      console.log("Response data:", data);

        if (response.ok) {
          // Login successful
          onLogin(email);
          onClose();
        } else {
          // Login failed
          setLoginError("Invalid email or password");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        setLoginError("An error occurred while logging in");
      }
    }
  };

  return (
    <div className="login-container-5">
      <div className="input-container-5">
        <label className="input-label-5">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field-5"
        />
        {emailError !== "" && <p className="error-message-1">{emailError}</p>}
      </div>
      <div className="input-container-5">
        <label className="input-label-5">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field-5"
        />
        {passwordError !== "" && <p className="error-message-1">{passwordError}</p>}
        {loginError !== "" && <p className="error-message-1">{loginError}</p>}
      </div>
      <div className="login-button-container-5">
        <button className="login-button2" onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default LoginTab;
