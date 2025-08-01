import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function InvoicePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedOptions = location.state;

  const prices = {
    Sunroof: 25000,
    "Cruise Control": 18000,
    "Wireless Charger": 12000,
    "Leather Seats": 30000,
    "Ambient Lighting": 10000,
    "Wood Finish Dashboard": 15000,
    "Alloy Wheels": 20000,
    "Chrome Grille": 8000,
    "Roof Rails": 12000
  };

  const selectedItems = Object.entries(selectedOptions).filter(([_, value]) => value);
  const subtotal = selectedItems.reduce((sum, [_, item]) => sum + (prices[item] || 0), 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const handleCancel = () => navigate("/configure");

  const handleConfirm = async () => {
    await generatePDF("invoice");
    await generatePDF("purchase-order");
    alert("Order confirmed!\nInvoice sent to customer.\nPO sent to vendor.");
  };

  const handlePrint = () => window.print();

  const generatePDF = async (type) => {
    const element = document.getElementById("invoice-content");
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save(`${type}.pdf`);
  };

  if (!selectedOptions) {
    return (
      <div style={containerStyle}>
        <h2>No configuration found.</h2>
        <button onClick={() => navigate("/configure")} style={buttonStyle}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: "1rem" }}>Invoice</h1>

      <div id="invoice-content" style={cardStyle}>
        <ul>
          {selectedItems.map(([category, item]) => (
            <li key={category}>
              <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong> {item} – ₹{prices[item]?.toLocaleString() || "0"}
            </li>
          ))}
        </ul>

        <hr style={{ margin: "1rem 0", borderColor: "#fff" }} />
        <p>Subtotal: ₹{subtotal.toLocaleString()}</p>
        <p>GST (18%): ₹{gst.toLocaleString()}</p>
        <h2>Total Amount: ₹{total.toLocaleString()}</h2>
      </div>

      <div style={buttonGroup}>
        <button onClick={handleCancel} style={buttonStyle}>Cancel</button>
        <button onClick={handleConfirm} style={buttonStyle}>Confirm</button>
        <button onClick={handlePrint} style={buttonStyle}>Print</button>
      </div>
    </div>
  );
}

const containerStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to right, #1e3c72, #2a5298)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  padding: "2rem"
};

const cardStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: "2rem",
  borderRadius: "8px",
  maxWidth: "600px",
  width: "100%",
  lineHeight: "1.6"
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

const buttonGroup = {
  marginTop: "1rem",
  display: "flex",
  gap: "1rem"
};

export default InvoicePage;