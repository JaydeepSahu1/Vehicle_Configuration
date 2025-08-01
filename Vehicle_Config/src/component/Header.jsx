import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isSignedIn = localStorage.getItem("signedIn") === "true";
  const userEmail = localStorage.getItem("userEmail");

  const handleSignOut = () => {
    localStorage.removeItem("signedIn");
    localStorage.removeItem("userEmail");
    alert("Signed out successfully.");
    navigate("/signin");
  };

  const pathMap = {
    "Home": "/",
    "About Us": "/about",
    "Contact Us": "/contact",
    "Registration": "/register",
    ...(isSignedIn
      ? { "Sign Out": "/signin" }
      : { "Sign In": "/signin" })
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem 0.5rem",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1000,
        backdropFilter: "blur(6px)",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
        height: "auto"
      }}
    >
      {/* 🏢 Company Name */}
      <h1 style={{ color: "#fff", fontSize: "2rem", margin: "0.5rem 0" }}>
        CarVisionX
      </h1>

      {/* 🌐 Navigation Buttons */}
      <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        {Object.keys(pathMap).map(label => (
          <button
            key={label}
            onClick={() => {
              if (label === "Sign Out") {
                handleSignOut();
              } else {
                navigate(pathMap[label]);
              }
            }}
            style={{
              background: "transparent",
              border: "2px solid #fff",
              borderRadius: "5px",
              padding: "0.5rem 1rem",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background 0.3s"
            }}
            onMouseEnter={e => (e.target.style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={e => (e.target.style.background = "transparent")}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* 👋 Welcome Message at Bottom Right */}
      {isSignedIn && userEmail && (
        <div
          style={{
            position: "absolute",
            bottom: "0.5rem",
            right: "3rem",
            color: "#fff",
            fontSize: "0.9rem",
            fontStyle: "italic"
          }}
        >
          👋 Welcome Sir, <strong>{userEmail}</strong>
        </div>
      )}
    </header>
  );
}

export default Header;