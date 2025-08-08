import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function InvoicePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    modelId,
    basePrice,
    totalPrice,
    selectedAlternates = {},
    allComponents = [],
    modelName,
    segment,
    manufacturer,
    price,
    quantity,
    totalAmount,
    defaultComponents = [],
  } = location.state || {};

  const isDefaultInvoice = !!modelName;

  const addedPrice = Object.values(selectedAlternates).reduce(
    (sum, alt) => sum + (alt.deltaPrice || 0),
    0
  );

  const gst = isDefaultInvoice
    ? totalAmount * 0.18
    : (basePrice + addedPrice) * 0.18;

  const finalTotal = isDefaultInvoice
    ? totalAmount + gst
    : basePrice + addedPrice + gst;

  const handleCancel = () => navigate(-1);

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

  const nonConfigurableItems = allComponents.filter(
    (comp) => comp.isConfigurable !== "Y"
  );

  const configurableItems = allComponents.filter(
    (comp) => comp.isConfigurable === "Y"
  );

  const typeMap = {
    C: "Core",
    S: "Standard",
    I: "Interior",
    E: "Exterior",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🧾 Invoice</h1>

      <div id="invoice-content" style={mainCardStyle}>
        {isDefaultInvoice ? (
          <>
            <Info label="Model" value={modelName} />
            <Info label="Segment" value={segment?.segName || "N/A"} />
            <Info label="Manufacturer" value={manufacturer?.mfgName || "N/A"} />
            <Info label="Quantity" value={quantity} />
            <Info label="Price per Unit" value={`₹${price?.toLocaleString?.() || 0}`} />
            <Info label="Total Price" value={`₹${totalAmount?.toLocaleString?.() || 0}`} />

            <h3 style={subheadingStyle}>Components:</h3>
            {defaultComponents.length > 0 ? (
              <ul>
                {defaultComponents.map((comp) => (
                  <li key={comp.configId}>
                  Type: {typeMap[comp.compType] || comp.compType} –  {comp.component?.compName || "Component"} 
                  </li>
                ))}
              </ul>
            ) : (
              <p>No default components listed.</p>
            )}
          </>
        ) : (
          <>
            <Info label="Base Price" value={`₹${basePrice.toLocaleString()}`} />

            <h3 style={subheadingStyle}>Components:</h3>
            {nonConfigurableItems.length > 0 ? (
              <ul>
                {nonConfigurableItems.map((comp) => (
                  <li key={comp.configId}>
                    {comp.component?.compName || "Component"} – Type: {typeMap[comp.compType] || comp.compType}
                  </li>
                ))}
              </ul>
            ) : (
              <p>None</p>
            )}

            <h3 style={subheadingStyle}>Configurable Components:</h3>
            {configurableItems.length > 0 ? (
              <ul>
                {configurableItems.filter(comp => {
                  const compId = comp.component?.compId?.toString();
                  return !selectedAlternates[compId];
                }).map(comp => (
                  <li key={comp.configId}>
                    {comp.component?.compName} – Type: {typeMap[comp.compType]}
                  </li>
                ))}
              </ul>
            ) : (
              <p>None</p>
            )}

            <h3 style={subheadingStyle}>Changed Components:</h3>
            {configurableItems.length > 0 ? (
              <ul>
                {configurableItems.filter(comp => {
                  const compId = comp.component?.compId?.toString();
                  return selectedAlternates[compId];
                }).map(comp => {
                  const compId = comp.component?.compId.toString();
                  const alt = selectedAlternates[compId];
                  return (
                    <li key={comp.configId}>
                      {comp.component?.compName} – Type: {typeMap[comp.compType]} →
                      <strong> Alternate: {alt.altName} (₹{alt.deltaPrice})</strong>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>None</p>
            )}

            
          </>
        )}

        <hr style={{ margin: "1.5rem 0", borderColor: "#ddd" }} />

        <Info label="Add-ons Total" value={`₹${addedPrice.toLocaleString()}`} />
        <Info label="GST (18%)" value={`₹${gst.toLocaleString()}`} />
        <h2 style={{ color: "#1e3c72", marginTop: "1rem" }}>
          Total Amount: ₹{finalTotal.toLocaleString()}
        </h2>
      </div>

      <div style={footerButtonContainerStyle}>
        <button onClick={handleCancel} style={cancelButtonStyle}>Cancel</button>
        <button onClick={handleConfirm} style={confirmButtonStyle}>Confirm</button>
        <button onClick={handlePrint} style={printButtonStyle}>Print</button>
      </div>
    </div>
  );
}

const Info = ({ label, value }) => (
  <p style={{ fontSize: "1rem", margin: "0.3rem 0" }}>
    <strong>{label}:</strong> {value}
  </p>
);

const containerStyle = {
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
  color: "#222",
  marginBottom: "1rem",
};

const subheadingStyle = {
  marginTop: "1.5rem",
  color: "#2a5298",
};

const mainCardStyle = {
  backgroundColor: "rgba(255,255,255,0.95)",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  width: "100%",
  maxWidth: "700px",
  lineHeight: "1.6",
  color: "#333",
};

const footerButtonContainerStyle = {
  marginTop: "2rem",
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
};

const buttonBase = {
  padding: "0.8rem 1.5rem",
  borderRadius: "6px",
  border: "none",
  fontWeight: "bold",
  color: "#fff",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const cancelButtonStyle = {
  ...buttonBase,
  backgroundColor: "#dc3545",
};

const confirmButtonStyle = {
  ...buttonBase,
  backgroundColor: "#28a745",
};

const printButtonStyle = {
  ...buttonBase,
  backgroundColor: "#2a5298",
};

export default InvoicePage;