import React from "react";

function AboutUs() {
  const team = [
    {
      name: "Jaydeep",
      role: "Lead Developer",
      bio: "Specializes in React and IoT systems, blending digital interfaces with smart automation.",
    },
    {
      name: "Aarav",
      role: "UI/UX Designer",
      bio: "Crafts intuitive user journeys and responsive layouts for seamless experiences.",
    },
    {
      name: "Neha",
      role: "Product Manager",
      bio: "Drives strategy and ensures alignment between user needs and technical execution.",
    },
  ];

  const timeline = [
    {
      year: "2023",
      event: "Conceptualized CarVisionX with a focus on user-centric vehicle configuration.",
    },
    {
      year: "2024",
      event: "Launched MVP with segment selection, feature customization, and vendor integration.",
    },
    {
      year: "2025",
      event: "Expanded platform with PDF generation, smart filters, and real-time inventory sync.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        overflowY: "auto",
        paddingTop: "7rem", // Prevent header overlap
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2rem" }}>🚗 About Us</h1>

        {/* Intro Section */}
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "2rem",
            borderRadius: "8px",
            textAlign: "center",
            lineHeight: "1.6",
            width: "100%",
          }}
        >
          <p>
            <strong>CarVisionX</strong> is a forward-thinking automotive platform dedicated to simplifying the vehicle selection and configuration process for customers and vendors alike.
          </p>
          <p>
            We believe that buying a car should be as exciting and personalized as driving one. That’s why we’ve built a system that empowers users to explore, configure, and confirm their ideal vehicle with just a few clicks.
          </p>
          <p>
            Our team combines deep expertise in web development, user experience design, and automotive systems to deliver a platform that’s both powerful and easy to use.
          </p>
        </div>

        {/* Team Section */}
        <h2 style={{ fontSize: "1.5rem" }}>👥 Meet the Team</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "1rem",
                borderRadius: "8px",
                width: "220px",
                textAlign: "center",
                lineHeight: "1.4",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>{member.name}</h3>
              <p style={{ fontStyle: "italic", marginBottom: "0.5rem" }}>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <h2 style={{ fontSize: "1.5rem" }}>📅 Our Journey</h2>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "1.5rem",
            borderRadius: "8px",
            width: "100%",
            textAlign: "left",
            lineHeight: "1.6",
          }}
        >
          {timeline.map((item, index) => (
            <p key={index}>
              <strong>{item.year}:</strong> {item.event}
            </p>
          ))}
        </div>

        {/* Contact Section */}
        <h2 style={{ fontSize: "1.5rem" }}>📞 Contact Us</h2>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "1rem",
            borderRadius: "8px",
            textAlign: "center",
            lineHeight: "1.6",
            width: "100%",
          }}
        >
          <p>📧 Email: support@carvisionx.com</p>
          <p>📍 Location: Mumbai, India</p>
          <p>📞 Phone: +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;