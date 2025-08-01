import { Link } from "react-router-dom";

function Help() {
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
      }}
    >
      <h1>❓ Help Center</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          borderRadius: "8px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          maxWidth: "500px",
          width: "90%",
          textAlign: "left",
        }}
      >
        <p>Welcome! Here are some common topics:</p>
        <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.6" }}>
          <li>🔧 How to use the site</li>
          <li>🔐 Account setup and login issues</li>
          <li>📦 Product or service inquiries</li>
          <li>📨 Contact support for unresolved issues</li>
        </ul>
        <p>
          Need more help? Visit our{" "}
          <Link
            to="/contact"
            style={{
              color: "#fff",
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