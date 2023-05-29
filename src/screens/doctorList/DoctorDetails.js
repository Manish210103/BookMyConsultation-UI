import React, { useState, useEffect } from "react";
import "./doctordetails.css";

const DoctorDetails = ({ doctor }) => {
  const [doctorDetails, setDoctorDetails] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/doctors/${doctor.id}`);
        const data = await response.json();
        setDoctorDetails(data);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    fetchDoctorDetails();
  }, [doctor]);

  return (
    <div className="doctor-details-overlay">
      <div className="doctor-details-container">
        <h1>Doctor Details</h1>
      </div>
      {doctorDetails && (
        <div className="doctor-details-content">
          <h3>Dr. {doctorDetails.firstName}</h3>
          <h5>Total Experience :     {doctorDetails.totalYearsOfExp}</h5>
          <h5>Speciality :     {doctorDetails.speciality}</h5>
          <h5>Date of Birth :     {doctorDetails.dob}</h5>
          <h5>City :     {doctorDetails.address.city}</h5>
          <h5>Email :     {doctorDetails.emailId}</h5>
          <h5>Mobile :     {doctorDetails.mobile}</h5>
          <h5>Rating :     {doctorDetails.rating}</h5>
        </div>
      )}
    </div>
  );
};

export default DoctorDetails;
