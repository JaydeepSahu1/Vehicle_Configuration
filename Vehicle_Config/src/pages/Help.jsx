import { Link } from "react-router-dom";

function Help() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        paddingTop: "7rem", // To prevent header overlap
        paddingBottom: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#222", marginBottom: "1.5rem" }}>
        ❓ Help Center
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "90%",
          maxWidth: "500px",
          color: "#333",
          textAlign: "left",
        }}
      >
        <p style={{ fontSize: "1rem" }}>Welcome! Here are some common topics:</p>
        <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.6", fontSize: "1rem" }}>
          <li>🔧 How to use the site</li>
          <li>🔐 Account setup and login issues</li>
          <li>📦 Product or service inquiries</li>
          <li>📨 Contact support for unresolved issues</li>
        </ul>
        <p style={{ fontSize: "1rem" }}>
          Need more help? Visit our{" "}
          <Link
            to="/contact"
            style={{
              color: "#2a5298",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}

export default Help;
