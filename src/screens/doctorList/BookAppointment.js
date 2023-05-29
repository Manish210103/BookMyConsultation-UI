import React, { useState, useEffect } from "react";
import "./bookappointment.css";

const BookAppointment = ({ onClose, doctor }) => {
  const [doctorName, setDoctorName] = useState({
    firstName: ""
});
  const [appointmentData, setAppointmentData] = useState({
    appointmentDate: "",
    timeSlot: "",
    medicalHistory: "",
    symptoms: ""
  });

  useEffect(() => {
    const fetchDoctorName = async () => {
      try {
        const response = await fetch(`http://localhost:8080/doctors/${doctor.id}`);
        const data = await response.json();
        setDoctorName(data);
      } catch (error) {
        console.error("Error fetching doctor name:", error);
      }
    };

    fetchDoctorName();
  }, [doctor]);

  const handleSubmit = async () => {
    try {
      // Perform form submission logic and send POST request
      const response = await fetch("http://localhost:8080/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          doctorName,
          ...appointmentData
        })
      });

      // Check if the request was successful
      if (response.ok) {
        // Handle success case
        console.log("Appointment booked successfully!");

        // Redirect to the home page
        window.location.href = "/";
      } else {
        // Handle error case
        console.error("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
    }

    // Close the overlay box
    onClose();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="book-appointment-overlay">
      <div className="book-appointment-modal">
        <div className="modal-header">
          <h2>Book an Appointment</h2>
        </div>
        <div className="modal-content">
          <label htmlFor="doctorName">Doctor's Name</label>
          <input
            id="doctorName"
            type="text"
            value={doctorName.firstName}
            disabled
          />
          {/* Add the date picker component */}
          <label htmlFor="appointmentDate">Appointment Date</label>
          <input
            id="appointmentDate"
            type="date"
            name="appointmentDate"
            value={appointmentData.appointmentDate}
            onChange={handleInputChange}
          />
          {/* Add the time slot component */}
          <label htmlFor="timeSlot">Time Slot</label>
          <input
            id="timeSlot"
            type="time"
            name="timeSlot"
            value={appointmentData.timeSlot}
            onChange={handleInputChange}
          />
          {/* Add the Medical History and Symptoms text fields */}
          <label htmlFor="medicalHistory">Medical History</label>
          <textarea
            id="medicalHistory"
            rows={4}
            name="medicalHistory"
            value={appointmentData.medicalHistory}
            onChange={handleInputChange}
          ></textarea>
          <label htmlFor="symptoms">Symptoms</label>
          <textarea
            id="symptoms"
            rows={4}
            name="symptoms"
            value={appointmentData.symptoms}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="book-appointment-button" onClick={handleSubmit}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
