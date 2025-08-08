import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Keep isSignedIn state in sync with token
  const checkSignInStatus = () => {
    const token = sessionStorage.getItem("jwtToken");
    setIsSignedIn(!!token); // true if token exists
  };

  useEffect(() => {
    checkSignInStatus();
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8080/api/user/login", {
        email,
        password,
      });

      const { token, email: userEmail } = res.data;

      sessionStorage.setItem("jwtToken", token);
      sessionStorage.setItem("userEmail", email);

      checkSignInStatus();
      alert(`Signed in as ${userEmail}`);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data ||
        "Login failed. Please try again.";
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = () => {
    sessionStorage.clear();
    checkSignInStatus();
    setEmail("");
    setPassword("");
    alert("Signed out successfully.");
    navigate("/signin");
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
        paddingTop: "7rem",
        paddingBottom: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#222", marginBottom: "1.5rem" }}>
        {isSignedIn ? "Don't Leave , Explore your Dream Car !!!" : "🔐 Sign In"}
      </h1>

      {!isSignedIn ? (
        <form
          onSubmit={handleSignIn}
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
          autoComplete="off"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              ...submitButtonStyle,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
            }}
            onMouseOver={(e) =>
              !loading && (e.target.style.backgroundColor = "#1e3c72")
            }
            onMouseOut={(e) =>
              !loading && (e.target.style.backgroundColor = "#2a5298")
            }
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      ) : (
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
          <p style={{ marginBottom: "1rem" }}>
            You are already signed in as{" "}
            <strong>{sessionStorage.getItem("userEmail")}</strong>.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <button
              onClick={() => navigate("/welcome")}
              style={submitButtonStyle}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#1e3c72")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#2a5298")
              }
            >
              Continue to Welcome
            </button>
            <button
              onClick={handleSignOut}
              style={{
                ...submitButtonStyle,
                backgroundColor: "#d9534f",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#c9302c")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#d9534f")
              }
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable styles
const inputStyle = {
  padding: "0.8rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const submitButtonStyle = {
  padding: "0.8rem",
  borderRadius: "6px",
  border: "none",
  fontWeight: "bold",
  backgroundColor: "#2a5298",
  color: "#fff",
  fontSize: "1rem",
  transition: "background-color 0.3s",
};

export default SignIn;
