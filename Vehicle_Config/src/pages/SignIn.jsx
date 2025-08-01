import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const signedIn = localStorage.getItem("signedIn");
    if (signedIn === "true") {
      setIsSignedIn(true);
    }
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("signedIn", "true");
      localStorage.setItem("userEmail", email);
      setIsSignedIn(true);
      alert(`Signed in as ${email}`);
      navigate("/welcome");
    } else {
      alert("Please enter valid credentials.");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("signedIn");
    localStorage.removeItem("userEmail");
    setIsSignedIn(false);
    alert("Signed out successfully.");
    navigate("/signin");
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
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1>{isSignedIn ? "Welcome Back" : "Sign In"}</h1>

      {!isSignedIn ? (
        <form
          onSubmit={handleSignIn}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, 0.1)"
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "0.8rem",
              borderRadius: "4px",
              border: "none",
              fontSize: "1rem"
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "0.8rem",
              borderRadius: "4px",
              border: "none",
              fontSize: "1rem"
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
              cursor: "pointer"
            }}
          >
            Sign In
          </button>
        </form>
      ) : (
        <button
          onClick={handleSignOut}
          style={{
            padding: "0.8rem 1.5rem",
            borderRadius: "4px",
            border: "none",
            fontWeight: "bold",
            backgroundColor: "#fff",
            color: "#2a5298",
            cursor: "pointer"
          }}
        >
          Sign Out
        </button>
      )}
    </div>
  );
}

export default SignIn;