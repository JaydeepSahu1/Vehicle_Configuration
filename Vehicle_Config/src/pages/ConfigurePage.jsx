import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const configOptions = {
  stdFeatures: [
    { name: "Sunroof", price: "₹25,000" },
    { name: "Cruise Control", price: "₹18,000" },
    { name: "Wireless Charger", price: "₹12,000" }
  ],
  interior: [
    { name: "Leather Seats", price: "₹30,000" },
    { name: "Ambient Lighting", price: "₹10,000" },
    { name: "Wood Finish Dashboard", price: "₹15,000" }
  ],
  exterior: [
    { name: "Alloy Wheels", price: "₹20,000" },
    { name: "Chrome Grille", price: "₹8,000" },
    { name: "Roof Rails", price: "₹12,000" }
  ]
};

function ConfigurePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("stdFeatures");
  const [selectedOptions, setSelectedOptions] = useState({
    stdFeatures: "",
    interior: "",
    exterior: ""
  });

  const handleChange = (tab, value) => {
    setSelectedOptions((prev) => ({ ...prev, [tab]: value }));
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
      <h1 style={{ marginBottom: "1rem" }}>Configure Vehicle</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          borderRadius: "8px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          width: "100%",
          maxWidth: "600px"
        }}
      >
        {/* Tab Buttons */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={() => setActiveTab("stdFeatures")} style={tabStyle}>Std. Features</button>
          <button onClick={() => setActiveTab("interior")} style={tabStyle}>Interior</button>
          <button onClick={() => setActiveTab("exterior")} style={tabStyle}>Exterior</button>
        </div>

        {/* Dropdown for selected tab */}
        <select
          value={selectedOptions[activeTab]}
          onChange={(e) => handleChange(activeTab, e.target.value)}
          style={inputStyle}
        >
          <option value="">-- Select {activeTab} Option --</option>
          {configOptions[activeTab].map((item) => (
            <option key={item.name} value={item.name}>
              {item.name} ({item.price})
            </option>
          ))}
        </select>

        {/* Navigation Buttons */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
          <button
            style={buttonStyle}
            onClick={() =>
              navigate("/invoice", {
                state: {
                  stdFeature: selectedOptions.stdFeatures,
                  interior: selectedOptions.interior,
                  exterior: selectedOptions.exterior
                }
              })
            }
          >
            Confirm Order
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/configuration")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const tabStyle = {
  padding: "0.6rem 1rem",
  borderRadius: "4px",
  border: "none",
  fontWeight: "bold",
  backgroundColor: "#fff",
  color: "#2a5298",
  cursor: "pointer"
};

const inputStyle = {
  padding: "0.8rem",
  borderRadius: "4px",
  border: "none",
  fontSize: "1rem",
  width: "100%"
};

const buttonStyle = {
  padding: "0.8rem 1.2rem",
  borderRadius: "4px",
  border: "none",
  fontWeight: "bold",
  backgroundColor: "#fff",
  color: "#2a5298",
  cursor: "pointer"
};

export default ConfigurePage;