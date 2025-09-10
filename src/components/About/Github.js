import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function GFGProfile() {
  const url = "https://www.geeksforgeeks.org/user/priyadharshini_nagarajan/";

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days <strong className="purple">I Code</strong>
      </h1>

      <div
        style={{
          background: "#1c1c1c",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          width: "400px",
          position: "relative",
          zIndex: 2, // ensure above particles/overlays
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
          alt="GeeksforGeeks Logo"
          style={{ width: "120px", marginBottom: "15px" }}
        />
        <p style={{ color: "#fff" }}>
          Check out my coding journey on GeeksforGeeks 🚀
        </p>

        <Button
          variant="success"
          onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
        >
          View Profile
        </Button>
      </div>
    </Row>
  );
}

export default GFGProfile;
