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
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "1rem",
      }}
    >
      <h1>Contact Us</h1>
      {submitted ? (
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "2rem",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h3>✅ Message Sent!</h3>
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
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            width: "100%",
            maxWidth: "400px",
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
              borderRadius: "4px",
              border: "none",
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
              borderRadius: "4px",
              border: "none",
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
              borderRadius: "4px",
              border: "none",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.8rem",
              borderRadius: "4px",
              border: "none",
              fontWeight: "bold",
              backgroundColor: "#fff",
              color: "#2a5298",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactUs;