import React from "react";

// Reusable Input Component
const InputField = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder} className="input-field" />
);

export default function SignUpPage() {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Sign Up</h2>
        <form>
          <InputField type="text" placeholder="Username" />
          <InputField type="email" placeholder="Email" />
          <InputField type="password" placeholder="Password" />
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
