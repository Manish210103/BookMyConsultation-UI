import React, { useState, useEffect } from 'react';
import './doctorlist.css';
import BookAppointment from './BookAppointment';
import DoctorDetails from './DoctorDetails';

const DoctorList = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [showBookAppointment, setShowBookAppointment] = useState(false);
  const [showViewDetails, setShowViewDetails] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch('http://localhost:8080/doctors');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctor details:', error);
      }
    };

    fetchDoctorDetails();
  }, []);

  const handleSpecialityChange = (event) => {
    setSelectedSpeciality(event.target.value);
  };

  const handleBookAppointment = () => {
    setShowBookAppointment(true);
  };

  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
    setShowViewDetails(true);
  };

  const filteredDoctors = selectedSpeciality
    ? doctors.filter((doctor) => doctor.speciality === selectedSpeciality)
    : doctors;

  return (
    <div className="doctor-list-container">
      <h5 className="speciality-heading">Select Speciality</h5>
      <select value={selectedSpeciality} onChange={handleSpecialityChange} className="speciality-select">
        <option value=""></option>
        <option value="CARDIOLOGIST">Cardiology</option>
        <option value="DENTIST">Dental</option>
        <option value="PULMONOLOGIST">Pulmonology</option>
        <option value="GENERAL_PHYSICIAN">General</option>
        <option value="ENT">ENT</option>
        <option value="GASTRO">gastrolgy</option>
        {/* Add other speciality options */}
      </select>

      {filteredDoctors.length > 0 && (
        <div>
          {filteredDoctors.map((doctor, index) => (
            <div className="doctor-box" key={index}>
              <h5 className="doctor-name">Name : {doctor.firstName}</h5>
              <h5 className="speciality">Speciality : {doctor.speciality}</h5>
              <h5 className="rating">Rating : {doctor.rating}</h5>
              <div className="button-container">
                <button className="book-appointment-button" onClick={handleBookAppointment}>
                  Book Appointment
                </button>
                <button className="view-details-button" onClick={() => handleViewDetails(doctor)}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showBookAppointment && (
        <div>
          <h2>Book Appointment Component</h2>
          <BookAppointment />
        </div>
      )}

      {showViewDetails && selectedDoctor && (
        <div>
          <h2>Doctor Details</h2>
          <DoctorDetails doctor={selectedDoctor} />
        </div>
      )}
    </div>
  );
};

export default DoctorList;
