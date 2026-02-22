import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "https://i.pravatar.cc/50" // default profile image
  });

  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [step, setStep] = useState("register");
  const [registeredUser, setRegisteredUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("registeredUser");
    if (savedUser) {
      setRegisteredUser(JSON.parse(savedUser));
      setStep("login");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    alert(`Your OTP is ${newOtp} (for demo)`);

    setStep("otp");
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        profilePic: formData.profilePic
      };

      setRegisteredUser(userData);
      localStorage.setItem("registeredUser", JSON.stringify(userData));

      alert("OTP Verified! You can now log in.");
      setStep("login");
    } else {
      alert("Invalid OTP! Please try again.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!registeredUser) {
      alert("You must register before logging in!");
      return;
    }

    if (
      formData.email === registeredUser.email &&
      formData.password === registeredUser.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(registeredUser));
      navigate("/"); // Redirect to Home
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="bg">
      <div className="toggle-buttons">
        <button
          onClick={() => setStep("register")}
          className={step === "register" ? "active" : ""}
        >
          Register
        </button>
        <button
          onClick={() => setStep("login")}
          className={step === "login" ? "active" : ""}
        >
          Login
        </button>
      </div>

      {step === "register" && (
        <div className="register-container">
          <form onSubmit={handleRegister} className="register-form">
            <h2>Register</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePic: reader.result }); // Save Base64 image
      };
      reader.readAsDataURL(file); // Convert file to Base64
    }
  }}
/>

{/* Preview selected image */}
{formData.profilePic && (
  <img
    src={formData.profilePic}
    alt="Profile Preview"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      objectFit: "cover",
      marginTop: "10px"
    }}
  />
)}

            <button type="submit">Register</button>
          </form>
        </div>
      )}

      {step === "otp" && (
        <div className="register-container">
          <form onSubmit={handleOtpSubmit} className="register-form">
            <h2>Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit">Verify OTP</button>
          </form>
        </div>
      )}

      {step === "login" && (
        <div className="register-container">
          <form onSubmit={handleLogin} className="register-form">
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
