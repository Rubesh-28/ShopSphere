import React from "react";
export default function LoginPage() {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Login</h2>
        <form>
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}