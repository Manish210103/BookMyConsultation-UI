import React, { useState } from 'react';
import './register.css';

const UniqueHeader = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [registerErrors, setRegisterErrors] = useState('');

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setRegisterErrors('');
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setRegisterErrors('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setRegisterErrors('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setRegisterErrors('');
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
    setRegisterErrors('');
  };

  const handleRegister = () => {
    // Perform validation
    if (!firstName || !lastName || !email || !password || !contactNumber) {
      setRegisterErrors('Please fill out all the fields');
      return;
    }

    // Call the register API endpoint with the provided user data
    // Replace the placeholder code below with your actual API call
    // Example using fetch:
    fetch('/users/register', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password, contactNumber }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Check the response from the API and handle successful registration
        if (data.success) {
          // Perform any additional actions upon successful registration
          // For example, you can update the UI or display a success message
          console.log('Registration Successful');
        } else {
          // Handle registration errors
          // For example, you can display an error message
          console.log('Registration Error:', data.message);
        }
      })
      .catch((error) => {
        // Handle any network errors or exceptions
        console.log('Registration Error:', error);
      });
  };

  return (
    <>
      {activeTab === 0 && (
        <div className="unique-tab-content">
          <div className="unique-input-container">
            <div className="unique-input">
              <label htmlFor="firstName" className="unique-label">
                First Name
              </label>
              <input
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <label htmlFor="lastName" className="unique-label">
                Last Name
              </label>
              <input
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
              />
              <label htmlFor="email" className="unique-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="password" className="unique-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <label htmlFor="contactNumber" className="unique-label">
                Contact Number
              </label>
              <input
                id="contactNumber"
                value={contactNumber}
                onChange={handleContactNumberChange}
              />
              <div className="unique-login-button-container">
                <button className="unique-register-button" onClick={handleRegister}>
                  REGISTER
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {registerErrors && (
        <div className="unique-floating-error-box">
          <div className="unique-error-message">{registerErrors}</div>
        </div>
      )}
    </>
  );
};

export default UniqueHeader;
