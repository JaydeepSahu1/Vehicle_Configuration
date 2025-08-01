import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();

  const initialForm = {
    companyName: "", address1: "", address2: "", area: "", city: "", state: "", pin: "",
    tel: "", fax: "", holding: "", authorizedPerson: "", designation: "",
    telAuth: "", cell: "", stNo: "", vatNo: "", pan: "",
    email: "", password: ""
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClear = () => {
    setForm(initialForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "companyName", "address1", "city", "state", "pin",
      "holding", "authorizedPerson", "designation", "email", "password"
    ];
    for (let field of requiredFields) {
      if (!form[field]) {
        alert("Please fill all mandatory (*) fields.");
        return;
      }
    }

    const registrationNumber = "REG-" + Date.now();
    alert(`Registration Successful!\nYour Registration Number: ${registrationNumber}`);
    handleClear();
    navigate("/signin");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        padding: "2rem 1rem",
        overflowY: "auto"
      }}
    >
      <h1 style={{ margin: "2rem 0 1rem", marginTop: "5rem" }}>Company Registration</h1>

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
          maxWidth: "600px",
          marginTop: "1rem"
        }}
      >
        
        {/* Company Info Fields */}
        {[
          { label: "Name of the company *", name: "companyName" },
          { label: "Address Line 1 *", name: "address1" },
          { label: "Address Line 2", name: "address2" },
          { label: "Area / City *", name: "city" },
          { label: "State *", name: "state" },
          { label: "Pin *", name: "pin" },
          { label: "Tel", name: "tel" },
          { label: "Fax", name: "fax" },
          { label: "Name of Authorized Person *", name: "authorizedPerson" },
          { label: "Designation *", name: "designation" },
          { label: "Tel (Authorized)", name: "telAuth" },
          { label: "Cell", name: "cell" },
          { label: "Company's ST No", name: "stNo" },
          { label: "Company VAT Reg. No", name: "vatNo" },
          { label: "I Tax PAN (if needed)", name: "pan" }
        ].map(({ label, name }) => (
          <input
            key={name}
            type="text"
            placeholder={label}
            name={name}
            value={form[name]}
            onChange={handleChange}
            style={{
              padding: "0.8rem",
              borderRadius: "4px",
              border: "none",
              fontSize: "1rem"
            }}
          />
        ))}

        {/* Holding Type */}
        <select
          name="holding"
          value={form.holding}
          onChange={handleChange}
          required
          style={{
            padding: "0.8rem",
            borderRadius: "4px",
            border: "none",
            fontSize: "1rem"
          }}
        >
          <option value="">-- Select Holding Type * --</option>
          <option value="Proprietary">Proprietary</option>
          <option value="Pvt. Ltd">Pvt. Ltd</option>
          <option value="Ltd">Ltd</option>
        </select>

{/* Email & Password */}
        <input
          type="email"
          placeholder="Email *"
          name="email"
          value={form.email}
          onChange={handleChange}
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
          placeholder="Password *"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          style={{
            padding: "0.8rem",
            borderRadius: "4px",
            border: "none",
            fontSize: "1rem"
          }}
        />

        {/* Buttons */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem" }}>
          <button
            type="submit"
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
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            style={{
              padding: "0.8rem 1.5rem",
              borderRadius: "4px",
              border: "none",
              fontWeight: "bold",
              backgroundColor: "#ccc",
              color: "#333",
              cursor: "pointer"
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;