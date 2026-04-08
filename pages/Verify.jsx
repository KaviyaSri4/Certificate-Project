import React from "react";
import { useParams } from "react-router-dom";

function Verify() {

  const { id } = useParams();

  const storedCertificates =
    JSON.parse(localStorage.getItem("certificates")) || [];

  const certificate = storedCertificates.find((c) => c.id === id);

  if (!certificate) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Certificate Not Found </h2>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      <h1>Certificate Verification</h1>

      <p><b>Certificate ID:</b> {certificate.id}</p>
      <p><b>Student Name:</b> {certificate.name}</p>
      <p><b>Course:</b> {certificate.course}</p>

      <h3 style={{ color: "green" }}>
         Certificate is Valid
      </h3>

    </div>
  );
}

export default Verify;