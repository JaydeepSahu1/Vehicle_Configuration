import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();

  const initialForm = {
    companyName: "", address1: "", address2: "", city: "", state: "", pin: "",
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

  const handleSubmit = async (e) => {
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

    const payload = {
      company_name: form.companyName,
      add1: form.address1,
      add2: form.address2,
      city: form.city,
      state: form.state,
      pin: parseInt(form.pin),
      tel: form.tel,
      fax: form.fax,
      auth_name: form.authorizedPerson,
      designation: form.designation,
      auth_tel: form.telAuth,
      cell: form.cell,
      company_st_no: form.stNo,
      company_vat_no: form.vatNo,
      tax_pan: form.pan,
      email: form.email,
      password: form.password
    };

    try {
      const response = await fetch("http://localhost:8080/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Registration failed.");

      const result = await response.json();
      alert(`Registration Successful!`);
      handleClear();
      navigate("/signin");

    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Please try again.");
    }
  };

return (
  <div
    style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      paddingTop: "7rem",
      paddingBottom: "3rem",
      backgroundColor: "#f5f5f5",
      fontFamily: "Arial, sans-serif",
    }}
  >
    <div
      style={{
        width: "90%",
        maxWidth: "800px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "2rem 2.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "2rem", color: "#222" }}>
        Company Registration
      </h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
          { label: "I Tax PAN (if needed)", name: "pan" },
        ].map(({ label, name }) => (
          <input
            key={name}
            type="text"
            placeholder={label}
            name={name}
            value={form[name]}
            onChange={handleChange}
            style={{
              padding: "0.75rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outlineColor: "#2a5298",
            }}
          />
        ))}

        <select
          name="holding"
          value={form.holding}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            outlineColor: "#2a5298",
            backgroundColor: "#333",
          }}
        >
          <option value="">-- Select Holding Type * --</option>
          <option value="Proprietary">Proprietary</option>
          <option value="Pvt_Ltd">Pvt. Ltd</option>
          <option value="Ltd">Ltd</option>
        </select>

        <input
          type="email"
          placeholder="Email *"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            outlineColor: "#2a5298",
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
            padding: "0.75rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            outlineColor: "#2a5298",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: "#2a5298",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: "#ccc",
              color: "#333",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  </div>
);
}

export default RegistrationForm;