import React, { useState } from "react";
import CertificateForm from "../components/CertificateForm";
import CertificateList from "../components/CertificateList";
import Certificate from "../components/Certificate";
import html2pdf from "html2pdf.js";

function Dashboard({ certificates, setCertificates }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [verifyId, setVerifyId] = useState("");
  const [verifyResult, setVerifyResult] = useState("");

  const addCertificate = (certificate) => {
    const newCertificate = { id: "CERT" + (certificates.length + 1), ...certificate };
    const updatedCertificates = [...certificates, newCertificate];
    setCertificates(updatedCertificates);
    localStorage.setItem("certificates", JSON.stringify(updatedCertificates));
    setSelectedCert(newCertificate);
  };

  const deleteCertificate = (index) => {
    if (window.confirm("Are you sure, you want to delete this certificate?")) {
      const updatedCertificates = certificates.filter((_, i) => i !== index);
      setCertificates(updatedCertificates);
      localStorage.setItem("certificates", JSON.stringify(updatedCertificates));
      setSelectedCert(null);
    }
  };

  const downloadPDF = () => {
    const element = document.getElementById("certificate");
    if (!element) return alert("No certificate to download!");
    html2pdf().set({
      margin: 0.5,
      filename: "certificate.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" }
    }).from(element).save();
  };

  const verifyCertificate = () => {
    const storedCertificates = JSON.parse(localStorage.getItem("certificates")) || [];
    const cert = storedCertificates.find(c => c.id === verifyId);
    if (cert) setVerifyResult(` Certificate ID ${verifyId} is VALID`);
    else setVerifyResult(` Certificate ID ${verifyId} is INVALID`);
  };

  return (
    <div>
      <h1>Certificate Management Dashboard</h1>

      <CertificateForm addCertificate={addCertificate} />
      <CertificateList certificates={certificates} deleteCertificate={deleteCertificate} />

      {selectedCert && (
        <div>
          <Certificate name={selectedCert.name} course={selectedCert.course} id={selectedCert.id} />

          <button onClick={downloadPDF}>Download Certificate PDF</button>

          <br /><br />

          {/* Same page verify */}
          <h3>Verify Certificate</h3>
          <input
            type="text"
            placeholder="Enter Certificate ID"
            value={verifyId}
            onChange={(e) => setVerifyId(e.target.value)}
          />
          <button onClick={verifyCertificate}>Verify</button>
          <p>{verifyResult}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;