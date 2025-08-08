import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Optional: send feedback to backend or API
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
        paddingTop: "7rem", // Consistent with ContactUs
        paddingBottom: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#222", marginBottom: "1.5rem" }}>
        📝 Share Your Feedback
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
          <h3 style={{ marginBottom: "0.8rem" }}>✅ Thank you!</h3>
          <p>We truly appreciate your valuable feedback.</p>
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
          <label htmlFor="feedback" style={{ fontWeight: "bold", fontSize: "1rem" }}>
            Your Thoughts:
          </label>
          <textarea
            id="feedback"
            rows="5"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Let us know what you think..."
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
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
