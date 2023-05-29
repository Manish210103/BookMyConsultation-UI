import React, { useState } from "react";

const RateAppointment = () => {
  const [comments, setComments] = useState("");

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = () => {
    // Perform submit logic with the comments
  };

  return (
    <div>
      <h6>Rate an Appointment</h6>
      <div>
        <label htmlFor="comments">Comments:</label>
        <textarea id="comments" rows="4" cols="50" value={comments} onChange={handleCommentsChange}></textarea>
      </div>
      {/* Add the star rating component */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RateAppointment;
