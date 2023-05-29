import React, { useState } from 'react';
import Doctors from '../doctorList/DoctorList';
import Appointment from '../appointment/Appointment';
import Header from "../../common/header/Header";
import "./Home.css"


const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Header />
      <div className="home-container">
        <button
          className={activeTab === 0 ? 'active' : ''}
          onClick={() => handleTabChange(0)}
        >
          DOCTORS
        </button>
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabChange(1)}
        >
          APPOINTMENT
        </button>
      </div>

      {activeTab === 0 && (
        <div className="doctors">
          <Doctors />
        </div>
      )}

      {activeTab === 1 && (
        <div className="appointment">
          <Appointment />
        </div>
      )}
    </div>
  );
};

export default Home;
