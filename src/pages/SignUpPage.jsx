import React from "react";
export default function SignUpPage() {
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
