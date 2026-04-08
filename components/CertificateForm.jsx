import React, { useState } from "react";

function CertificateForm({ addCertificate }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCertificate({ name, course });
    setName("");
    setCourse("");
  };

  return (
    <div>
      <h2>Issue Certificate</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Course Name"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <br /><br />

        <button type="submit">Issue Certificate</button>
      </form>
    </div>
  );
}

export default CertificateForm;