import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

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
        paddingTop: "7rem", // Avoid header overlap
        paddingBottom: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#222", marginBottom: "1.5rem" }}>
        📬 Contact Us
      </h1>

      {submitted ? (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            textAlign: "center",
            color: "#333",
            maxWidth: "400px",
            width: "90%",
          }}
        >
          <h3 style={{ marginBottom: "0.8rem" }}>✅ Message Sent!</h3>
          <p>Thanks for reaching out. We'll get back to you shortly.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            width: "90%",
            maxWidth: "400px",
            color: "#333",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "0.8rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "0.8rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            style={{
              padding: "0.8rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.8rem",
              borderRadius: "6px",
              border: "none",
              fontWeight: "bold",
              backgroundColor: "#2a5298",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#1e3c72")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2a5298")}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactUs;
