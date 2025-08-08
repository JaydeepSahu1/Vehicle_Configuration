import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Function to check sessionStorage and update state
  const syncSession = () => {
    const token = sessionStorage.getItem("jwtToken");
    const email = sessionStorage.getItem("userEmail");
    setIsSignedIn(!!token);
    setUserEmail(email || "");
  };

  useEffect(() => {
    syncSession();

    // Listen for storage changes from other tabs
    window.addEventListener("storage", syncSession);

    // Optional: Polling every 1 second to catch same-tab changes
    const interval = setInterval(syncSession, 1000);

    return () => {
      window.removeEventListener("storage", syncSession);
      clearInterval(interval);
    };
  }, []);

  const pathMap = {
    Home: "/",
    "About Us": "/about",
    "Contact Us": "/contact",
    Registration: "/register",
    ...(isSignedIn ? { "Sign Out": "/signin" } : { "Sign In": "/signin" }),
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1000,
        backdropFilter: "blur(6px)",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
        height: "60px",
      }}
    >
      {/* Company Name */}
      <h1 style={{ color: "#fff", fontSize: "1.5rem", margin: 0 }}>
        CarVisionX
      </h1>

      {/* Navigation Buttons */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "0.5rem",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        {Object.keys(pathMap).map((label) => (
          <button
            key={label}
            onClick={() => navigate(pathMap[label])}
            style={{
              background: "transparent",
              border: "1px solid #fff",
              borderRadius: "4px",
              padding: "0.4rem 0.8rem",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "0.9rem",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "transparent")
            }
          >
            {label}
          </button>
        ))}
      </div>

      {/* Welcome Message */}
      {isSignedIn && userEmail && (
        <div
          style={{
            position: "absolute",
            bottom: "0.3rem",
            right: "3rem",
            color: "#fff",
            fontSize: "0.8rem",
            fontStyle: "italic",
          }}
        >
          👋 Welcome, <strong>{userEmail}</strong>
        </div>
      )}
    </header>
  );
}

export default Header;
