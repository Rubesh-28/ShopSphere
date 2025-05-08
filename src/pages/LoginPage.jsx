import React from "react";

const InputField = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder} className="input-field" />
);

export default function LoginPage() {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Login</h2>
        <form>
          <InputField type="text" placeholder="Username" />
          <InputField type="password" placeholder="Password" />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}