import React from "react";
import "./appointment.css";
import RateAppointment from "./RateAppointment";

const Appointment = () => {
  const handleRateAppointment = () => {
    RateAppointment();
  };

  return (
    <div className="appointment-container">
      <h3 className="appointment-title">APPOINTMENT</h3>
      <div className="appointment-item">
        <h3>Doctor's Name : Dr.Alexis</h3>
        <h5>Appointment Date : 25/03/2023</h5>
        <h5>Symptoms : Cough</h5>
        <h5>Previous Medical History : NA</h5>
        <button className="appointment-button" onClick={handleRateAppointment}>
          RATE APPOINTMENT
        </button>
      </div>
      {/* Add more appointment items */}
      <div className="appointment-separator"></div>
    </div>
  );
};

export default Appointment;
