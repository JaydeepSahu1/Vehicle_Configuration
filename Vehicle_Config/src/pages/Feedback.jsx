import { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can integrate backend API here
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
      }}
    >
      <h1>📝 Feedback</h1>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "90%",
          textAlign: "left",
        }}
      >
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <label htmlFor="feedback" style={{ fontWeight: "bold" }}>
              Your thoughts:
            </label>
            <textarea
              id="feedback"
              rows="6"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              placeholder="Let us know what you think..."
              style={{
                padding: "1rem",
                borderRadius: "4px",
                border: "none",
                fontSize: "1rem",
                resize: "none",
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
              Submit
            </button>
          </form>
        ) : (
          <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>✅ Thank you for your feedback!</p>
        )}
      </div>
    </div>
  );
};

export default Feedback;