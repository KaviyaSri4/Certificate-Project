import React from "react";

function CertificateList({ certificates, deleteCertificate }) {
  return (
    <div>
      <h2>Issued Certificates</h2>

      <ul>
        {certificates.map((cert, index) => (
          <li key={index}>
            {cert.id} - {cert.name} - {cert.course}

            <button onClick={() => deleteCertificate(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CertificateList;