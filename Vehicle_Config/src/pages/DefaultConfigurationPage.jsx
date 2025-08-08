import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function DefaultConfigurationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { modelId, quantity } = location.state || {};

  const [token, setToken] = useState(null);
  const [modelInfo, setModelInfo] = useState(null);

  // Load token from sessionStorage
  useEffect(() => {
    const storedToken = sessionStorage.getItem("jwtToken");
    if (!storedToken) {
      alert("Session expired or not logged in. Please sign in.");
      navigate("/signin");
    } else {
      setToken(storedToken);
    }
  }, [navigate]);

  // Fetch default model configuration
  useEffect(() => {
    if (!modelId || !token) return;

    fetch(`http://localhost:8080/models/default/${modelId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          alert("Session expired. Please login again.");
          sessionStorage.clear();
          navigate("/signin");
          return null;
        }
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data) setModelInfo(data);
      })
      .catch((err) => {
        console.error("Failed to fetch default configuration:", err);
        setModelInfo(null);
      });
  }, [modelId, token, navigate]);

  const handleConfirm = () => {
    if (!modelInfo) return;
    const finalQuantity = quantity ?? modelInfo.minQty;
    navigate("/invoice", {
      state: {
        modelId: modelInfo.modelId,
        modelName: modelInfo.modelName,
        manufacturer: modelInfo.manufacturer,
        segment: modelInfo.segment,
        imagePath: modelInfo.imagePath,
        quantity: finalQuantity,
        price: modelInfo.price,
        totalAmount: finalQuantity * modelInfo.price,
        defaultComponents: modelInfo.defaultComponents,
      },
    });
  };

  const handleConfigure = () =>
    navigate("/configure", { state: { modelId: modelInfo.modelId } });

  const handleModify = () => navigate("/welcome");

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Default Configuration</h1>

      <div style={cardStyle}>
        {modelInfo && modelInfo.imagePath && (
          <img
            src={`http://localhost:8080${modelInfo.imagePath}`}
            alt={modelInfo.modelName}
            style={imageStyle}
          />
        )}

        {modelInfo ? (
          <>
            <div style={{ marginBottom: "1rem" }}>
              <div><strong>Segment:</strong> {modelInfo.segment?.segName}</div>
              <div><strong>Manufacturer:</strong> {modelInfo.manufacturer?.mfgName}</div>
              <div><strong>Model:</strong> {modelInfo.modelName}</div>
              <div><strong>Quantity:</strong> {quantity ?? modelInfo.minQty}</div>
              <div><strong>Price per Unit:</strong> ₹{modelInfo.price}</div>
              <div><strong>Total Price:</strong> ₹{(quantity ?? modelInfo.minQty) * modelInfo.price}</div>

              <hr style={{ borderColor: "#ccc", margin: "1rem 0" }} />

              <h3 style={{ marginBottom: "0.5rem" }}>Default Components</h3>
              {modelInfo.defaultComponents?.length > 0 ? (
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={tableHeaderStyle}>Component Name</th>
                      <th style={tableHeaderStyle}>Component Type</th>
                      <th style={tableHeaderStyle}>Is Configurable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modelInfo.defaultComponents.map((comp) => (
                      <tr key={comp.configId}>
                        <td style={tableCellStyle}>{comp.component?.compName || "Unknown"}</td>
                        <td style={tableCellStyle}>
                          {{
                            C: "Core",
                            S: "Standard",
                            I: "Interior",
                            E: "Exterior"
                          }[comp.compType] || comp.compType}
                        </td>
                        <td style={tableCellStyle}>
                          {{
                            Y: "Yes",
                            N: "No"
                          }[comp.isConfigurable] || comp.isConfigurable}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No default components found for this model.</p>
              )}
            </div>
          </>
        ) : (
          <p style={{ textAlign: "center", color: "#555" }}>Loading or no data found.</p>
        )}

        <div style={buttonContainerStyle}>
          <button onClick={handleConfirm} style={buttonStyle}>Confirm Order</button>
          <button onClick={handleConfigure} style={buttonStyle}>Configure</button>
          <button onClick={handleModify} style={buttonStyle}>Modify Selection</button>
        </div>
      </div>
    </div>
  );
}

// Styling

const containerStyle = {
  minHeight: "80vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundImage: `linear-gradient(rgba(255,255,255,0.0), rgba(255,255,255,0.5)), url('/images/w1.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  fontFamily: "Arial, sans-serif",
  padding: "3rem",
  paddingTop: "6rem",
};

const headingStyle = {
  fontSize: "2rem",
  marginBottom: "1rem",
  color: "#222",
};

const cardStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(10px)",
  padding: "2rem",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  width: "100%",
  maxWidth: "1000px",
  position: "relative",
  color: "#333",
};

const imageStyle = {
  width: "250px",
  height: "auto",
  borderRadius: "10px",
  position: "absolute",
  top: "2rem",
  right: "2rem",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  backgroundColor: "#fff",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "1rem",
};

const tableHeaderStyle = {
  borderBottom: "2px solid #ccc",
  padding: "0.75rem",
  textAlign: "left",
  backgroundColor: "#f0f0f0",
};

const tableCellStyle = {
  padding: "0.6rem",
  borderBottom: "1px solid #ddd",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  marginTop: "2rem",
};

const buttonStyle = {
  padding: "0.8rem 1.2rem",
  borderRadius: "6px",
  border: "none",
  fontWeight: "bold",
  backgroundColor: "#2a5298",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.3s",
};

export default DefaultConfigurationPage;
