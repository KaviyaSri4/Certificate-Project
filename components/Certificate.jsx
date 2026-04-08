import React from "react";
import QRCode from "react-qr-code";
import logo from "../assets/logo.png"; 

function Certificate({ name, course, id }) {
  return (
    <div
      id="certificate"
      style={{
        border: "6px double black",
        padding: "40px",
        width: "800px",
        margin: "20px auto",
        textAlign: "center",
        backgroundColor: "#fffbe6",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}
    >
      {/* Logo - Big */}
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
          marginBottom: "20px"
        }}
      />

      {/* Institution Name */}
      <h2 style={{ margin: "5px 0" }}>KG INSTITUTION</h2>

      {/* Certificate Title */}
      <h1 style={{ color: "darkblue", margin: "10px 0" }}>
        CERTIFICATE OF COMPLETION
      </h1>

      <p style={{ margin: "10px 0" }}>This certificate is proudly presented to</p>

      {/* Student Name */}
      <h2 style={{ margin: "10px 0" }}>{name}</h2>

      <p style={{ margin: "10px 0" }}>For successfully completing the course</p>

      {/* Course Name */}
      <h3 style={{ margin: "10px 0", fontStyle: "italic" }}>{course}</h3>

      {/* Certificate ID */}
      <p style={{ margin: "10px 0" }}>Certificate ID: {id}</p>

      {/* QR Code - Small */}
      <div style={{ width: "80px", margin: "20px auto" }}>
        <QRCode value={`http://localhost:5173/verify/${id}`} size={80} />
      </div>

      <p style={{ marginTop: "30px" }}>Authorized Signature</p>
    </div>
  );
}

export default Certificate;