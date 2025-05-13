import React from "react";
import { useNavigate } from "react-router-dom";

const InputField = ({ type, placeholder, id }) => (
  <input type={type} placeholder={placeholder} id={id} className="input-field" />
);

function Login(e, navigate) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const pass = document.getElementById("Pass").value;
  if (name === "user" && pass === "1234") {
    navigate("/");
  } 
  else if
    (name === "admin" && pass === "admin"){
    navigate("/admin");
  } 
  else if(name === "vendor" && pass === "vendor"){
    navigate("/vendordash");
  }
  else {
    alert("Invalid credentials");
  }
}

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Login</h2>
        <form onSubmit={(e) => Login(e, navigate)}>
          <InputField type="text" placeholder="Username" id="name" />
          <InputField type="password" placeholder="Password" id="Pass" />
          <button type="submit" className="btn">Login</button>
          <p className="form-footer">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}