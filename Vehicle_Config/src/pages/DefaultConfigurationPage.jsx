import React from "react";
import { useNavigate } from "react-router-dom";

function DefaultConfigurationPage() {
  const navigate = useNavigate();

  // Sample default configuration (can be dynamic later)
  const defaultConfig = {
    segment: "SUVs",
    manufacturer: "Mahindra",
    model: "XUV700",
    engine: "2.0L Turbo Petrol",
    transmission: "Automatic",
    color: "Midnight Black",
    price: "₹22,50,000"
  };

  // ✅ Updated to pass config data to Invoice page
  const handleConfirm = () => {
    navigate("/invoice", { state: defaultConfig });
  };

  const handleConfigure = () => {
    navigate("/configure");
  };

  const handleModify = () => {
    navigate("/welcome");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "1rem"
      }}
    >
      <h1 style={{ marginBottom: "1rem" }}>Default Configuration</h1>

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "2rem",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        {Object.entries(defaultConfig).map(([key, value]) => (
          <div key={key} style={{ fontSize: "1rem" }}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </div>
        ))}

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
          <button onClick={handleConfirm} style={buttonStyle}>Confirm Order</button>
          <button onClick={handleConfigure} style={buttonStyle}>Configure</button>
          <button onClick={handleModify} style={buttonStyle}>Modify Selection</button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "0.8rem 1.2rem",
  borderRadius: "4px",
  border: "none",
  fontWeight: "bold",
  backgroundColor: "#fff",
  color: "#2a5298",
  cursor: "pointer"
};

export default DefaultConfigurationPage;